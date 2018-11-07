import React from "react";

export default () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        ACME Robo K Cosmo Unlimited, Demo Fake Company
      </h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <a
          className="p-2 text-dark"
          href="https://rkloecker.github.io/newtest/homepage.html"
        >
          Home
        </a>
        <a className="p-2 text-dark" href="#">
          Details
        </a>
        <a className="p-2 text-dark" href="#">
          List
        </a>
        <a className="p-2 text-dark" href="#">
          My Github repos
        </a>
      </nav>
    </div>
  );
};
