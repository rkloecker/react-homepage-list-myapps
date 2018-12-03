import React, { Component } from "react";
import axios from "axios";
import AppItem from "./AppItem";
import { Promise } from "rsvp";

export default class AppList extends Component {
  constructor() {
    super();
    this.state = {
      url: "https://quiet-beyond-62095.herokuapp.com/",
      Apps: [],
      loading: true
    };
  }

  componentDidMount() {
    this.getApps();
    console.log(process.env);
  }

  // just for testing purposes, simulating response delay
  wait(data) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(data);
      }, 4000);
    });
  }

  getApps() {
    axios
      .get(`${this.state.url}api/apps`)
      // .then(this.wait)
      .then(response => {
        this.setState({ Apps: response.data, loading: false }, () => {
          console.log(this.state);
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const AppItems = this.state.Apps.map((App, i) => {
      return <AppItem key={App._id} item={App} />;
    });
    return (
      <div className="row">{this.state.loading ? "...loading" : AppItems}</div>
    );
  }
}
