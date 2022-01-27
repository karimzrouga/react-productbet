import "../App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../component/home/Home";
import HBet from "../component/home/pages/HBet";
import HEvent from "../component/home/pages/HEvents";
import Signin from "../component/login/sign-in";
import Signup from "../component/login/sign-up";
import React, { useState, useEffect } from "react";
import { Client } from "../Constantes/Client";
import { Bet } from "../Constantes/Bet";
import {
  Addclient,
  Clientbets,
  loadclient,
  UpdateClient,
} from "../services/Client_services";
import Profile from "../component/client/Profile";
import { useNavigate } from "react-router-dom";
import { bidBet, Findbyid } from "../services/Bet_services";
import { authentication } from "../services/AuthenticationManager";
import { Token } from "../Constantes/Token";
import Detail from "../component/home/pages/Details";
import HContact from "../component/home/pages/contact";

export default function Public({ onFileChange, onFileUpload, file, filename }) {
  const [client, setClient] = useState(Client);
  const [auth, setauth] = useState(false);
  const [bet, setbet] = useState(Bet);
  const [Lbet, setLbet] = useState([]);
  const [price, setprice] = useState({ finalprix: null });
  const [state, setstate] = useState({ edit: false, in: false, up: false });
  const [search, setsearch] = useState({
    fsearch: "",
    Auctions: "All",
    rinm: -1,
    rmax: 0,
  });

  let navigate = useNavigate();
  let editmod = () => {
    setstate({ edit: true });
    // console.log(state)
  };
  let inmod = () => {
    setstate({ in: true });
    // console.log(state)
  };
  let upmod = () => {
    setstate({ up: true });
    // console.log(state)
  };
  //////////////////bet//////////////////////////////////////
  let BethandleChange = (event) => {
    setprice({ ...price, [event.target.name]: event.target.value });
  };

  let SelectedBet = ($id) => {
    Findbyid($id).then((data) => {
      let item = data.data;
      setbet({ ...bet, ...item });
    });
  };
  let BethandleSubmit = () => {
    if (!Number.isInteger(client.idclient)) {
      navigate("/in");
    }
    if (Token == null) {
      navigate("/in");
    } else {
      if (Number.isInteger(bet.idBet) && bet.finalprix < price.finalprix) {
        bet.finalprix = price.finalprix;
        bidBet(bet, client.idclient).then((data) => {});
      }
    }
  };

  /**************login*********************** */

  let handleChange = (event) => {
    setClient({ ...client, [event.target.name]: event.target.value });
  };

  let handleSubmit = (event) => {
    if (state.in) {
      // console.log("signin");
      authentication(client);

      if (Token !== null) {
        // console.log(Token);
        setauth(true);
        loadclient(client.username).then((data) => {
          setClient({ ...client, ...data.data });
          localStorage.setItem("user", JSON.stringify(data.data));
        });
        Clientbets(client.idclient).then((data) => {
          let list = data.data;
          setLbet({ ...Lbet, list });
        });
        if (client.idclient !== "") {
          navigate("/profile");
        }
      }
    }
    console.log(state.edit);
    if (state.edit) {
      if (Number.isInteger(client.idclient)) {
        if (file.file !== null) {
          console.log(file.file.name);
          client.image = file.file.name;
          onFileUpload();
        }
        UpdateClient(client).then(() => {});
        localStorage.setItem("user", JSON.stringify(client));
      }
    }
    if (state.up) {
      Addclient(client).then(() => {});
      navigate("/in");
    }
  };
  /************************************** */
  useEffect(() => {
    console.log(Token);
    console.log(Token !== "null");
    if (Token !== "null") {
      var user = JSON.parse(localStorage.getItem("user"));
      if (user && Object(Lbet).length === 0) {
        Clientbets(user.idclient).then((data) => {
          let list = data.data;
          setLbet([...Lbet, ...list]);
        });
      }
      if (client.idclient === "") {
        setClient({ ...client, ...user });
        setauth(true);
      }
    }
  }, [client]);

  let Isexpired = (bet) => {
    const date = new Date().toISOString().substring(0, 10);
    if (new Date(bet.lastdate) < new Date(date)) {
      if (bet.state) {
      }
      return false;
    } else {
      return true;
    }
  };
  let handlesearsch = (event) => {
    setsearch({ ...search, [event.target.name]: event.target.value });
  };
  let searschSubmit = (event) => {
    console.log(search);
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/hbets"
        element={
          <HBet
            search={search}
            searschSubmit={searschSubmit}
            handlesearsch={handlesearsch}
            Isexpired={Isexpired}
            auth={auth}
            BethandleChange={BethandleChange}
            BethandleSubmit={BethandleSubmit}
            SelectedBet={SelectedBet}
          />
        }
      />
      <Route
        path="/in"
        element={
          <Signin
            user={client}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            inmod={inmod}
          />
        }
      />
      <Route
        path="/up"
        element={
          <Signup
            user={client}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            upmod={upmod}
          />
        }
      />
      <Route path="/hevent" element={<HEvent />} />
      <Route
        path="/profile"
        element={
          <Profile
            Lbet={Lbet}
            user={client}
            handleChange={handleChange}
            onFileChange={onFileChange}
            onFileUpload={onFileUpload}
            file={file}
            filename={filename}
            handleSubmit={handleSubmit}
            editmod={editmod}
          />
        }
      />
      <Route
        path="/Betdetails"
        element={
          <Detail
            index={-1}
            BetSelected={bet}
            Isexpired={Isexpired}
            BethandleChange={BethandleChange}
            BethandleSubmit={BethandleSubmit}
            auth={auth}
            SelectedBet={SelectedBet}
          />
        }
      />

      <Route path="/contact" element={<HContact />} />
    </Routes>
  );
}
