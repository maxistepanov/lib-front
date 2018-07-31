import React from "react";

const withScreenLoader = Component => {
  return class extends React.Component {
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
      return <Component {...this.props} />;
    }
  };
};

export default withScreenLoader;
