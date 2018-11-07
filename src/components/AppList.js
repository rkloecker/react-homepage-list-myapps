import React, { Component } from "react";
import axios from "axios";
import AppItem from "./AppItem";

export default class AppList extends Component {
  constructor() {
    super();
    this.state = {
      url: "https://quiet-beyond-62095.herokuapp.com/",
      Apps: []
    };
  }

  componentDidMount() {
    this.getApps();
    console.log(process.env);
  }

  getApps() {
    axios
      .get(`${this.state.url}api/apps`)
      .then(response => {
        this.setState({ Apps: response.data }, () => {
          console.log(this.state);
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const AppItems = this.state.Apps.map((App, i) => {
      return <AppItem key={App._id} item={App} />;
    });
    return <div className="row">{AppItems}</div>;
  }
}
