import React from "react";
import StackGrid from "react-stack-grid";

export default class Responsive extends React.Component {
  render() {
    const center={
      "width": "90%",
      "margin": "0 auto"
    }
    return (
      <StackGrid
        columnWidth={150} style={center}
      >
        <div className="card" key="key1">Item 1</div>
        <div className="card" key="key2">Item 2</div>
        <div className="card" key="key3"> Item 3</div>
      </StackGrid>
    );
  }
}