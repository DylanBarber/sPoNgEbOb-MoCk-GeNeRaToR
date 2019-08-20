//Dependencies
import React from "react";
import ReactDOM from "react-dom";
//CSS
import "./index.css";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="pageWrapper">
        <Header />
        <div className="entryArea">
          <h2>Enter text below</h2>
          <textarea className="textArea" />
        </div>

        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));