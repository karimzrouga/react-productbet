
export default function BetArticles({ article }) {
  let { idArticle, name, image, description } = article;
  return (
    <div className="card shadow-sm">
      <img
        className="card-img-top bg-dark cover"
        height="200"
        alt=""
        src={"/assets/" + image}
      />
      <div className="card-body">
        <dl className="row">
          <dt className="col-sm-4">Code </dt> {idArticle}
        </dl>

        <h5 className="card-title text-center text-dark text-truncate">
          {name}
        </h5>
        <hr />
        <p className="card-text text-center text-muted">{description}</p>
      </div>
    </div>
  );
}
