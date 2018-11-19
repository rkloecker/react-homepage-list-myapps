import React from "react";

export default ({
  item: { title, description_long, description_short, url, repo_url }
}) => {
  return (
    <div className="col-lg-4 mt-2">
      <div className="card">
        <div className="card-body bg-">
          <h5 className="card-title "> {title}</h5>
          <p className="card-text">{description_long}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{description_short}</li>
          <li className="list-group-item">
            <a href={url}>{url}</a>
          </li>
        </ul>
        <div className="card-body">
          <a href={repo_url}>{repo_url}</a>
        </div>
      </div>
    </div>
  );
};
