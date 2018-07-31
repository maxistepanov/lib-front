import React from "react";

class App extends React.Component {
  componentDidMount() {
    const loader = document.getElementById("container-loader");
    if (loader) {
      loader.classList.add("hide");
      setTimeout(() => {
        loader.outerHTML = "";
      }, 2000);
    }
  }

  render() {
    return this.props.children;
  }
}

export default App;
