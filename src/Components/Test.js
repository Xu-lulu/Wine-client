import axios from "axios";
import React from "react";

export default class Test extends React.Component {
  state = {
    content: null,
  };
  componentWillMount() {
    axios
      .get("http://localhost:8080/")
      .then((res) => res.data)

      .then((res) => {
        this.setState({
          content: res,
        });
      });
  }
  render() {
    const a = this.state;
    console.log(a);
    return (
      <div>
        <p>{this.state.content}</p>
      </div>
    );
  }
}
