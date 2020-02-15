import React, { Component } from "react";

class CallbackQueue extends Component {
  constructor(props) {
    super();
  }

  render() {
    const values = [];
    let trav = this.props.queue.head;
    let key = 0;
    while (trav !== null) {
      values.push(
        <div
          key={key}
          style={{
            backgroundColor: "yellow",
            padding: "16px",
            border: "1px solid black",
            color: "black"
          }}
        >
          {trav.value}
        </div>
      );
      trav = trav.next;
      ++key;
    }
    return <div style={{ display: "flex" }}>{values}</div>;
  }
}

export default CallbackQueue;
