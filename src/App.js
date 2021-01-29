import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.tableValues = [
      {
        value: "$200",
      },
      {
        value: "$400",
      },
      {
        value: "$600",
      },
      {
        value: "$800",
      },
      {
        value: "$1000",
      },
    ];
    this.state = {
      hasData: false,
      columns: [
        {
          Header: "Category 1",
          accessor: "value",
          id: "1",
          headerStyle: {
            marginTop: "0px",
            height: "75px",
          },
          style: {
            borderRadius: "5px",
            borderColor: "black",
          },
        },
        {
          Header: "Category 2",
          accessor: "value",
        },
        {
          Header: "Category 3",
          accessor: "value",
        },
        {
          Header: "Category 4",
          accessor: "value",
        },
        {
          Header: "Category 5",
          accessor: "value",
        },
        {
          Header: "Category 6",
          accessor: "value",
        },
      ],
    };
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Not Jeopardy - but like it</h1>
        </header>
      </div>
    );
  }
}

export default App;
