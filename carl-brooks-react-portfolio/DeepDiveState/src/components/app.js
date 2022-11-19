import React, { Component } from "react";
import JournalList from "./journals/journals_list";
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React, Props, and State Deep Dive</h1>

        <JournalList />
        <JournalList heading="List 1" />
      </div>
    );
  }
}