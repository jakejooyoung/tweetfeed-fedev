import React from "react";
import StackGrid from "react-stack-grid";

export default class Responsive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts:{}
    };
  }
  componentDidMount() {
    this.PostList();
  }

  PostList() {

    var myHeaders = new Headers();

    var myInit = {  method: 'GET',
                    headers: myHeaders,
                    mode: 'cors',
                    cache: 'default' };
    var req = new Request('/api/posts/1', myInit);

    return fetch(req).then(r => r.json())
      .then(data => console.log(data.body))
      .catch(e => console.log("Booo"))
  }
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