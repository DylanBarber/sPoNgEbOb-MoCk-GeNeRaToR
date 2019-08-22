//Dependencies
import React from "react";
import ReactDOM from "react-dom";
//CSS
import "./index.css";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    inputText: "",
    caseSwitch: true
  };
  textAreaOnChangeHandler = e => {
    this.setState({ inputText: e.target.value });
  };
  convertHandler = () => {
    let caseSwitch = true;
    let convertedText = [];
    let preConvertedText = this.state.inputText.split("");
    preConvertedText.forEach(character => {
      if (caseSwitch) {
        convertedText.push(character.toUpperCase());
      } else {
        convertedText.push(character.toLowerCase());
      }
      if (character !== " " && character !== "'") {
        caseSwitch = !caseSwitch;
      }
    });
    let spongebob = document.getElementById('canvas').getContext('2d');
    spongebob.fillStyle = 'white';
    spongebob.font = '32px Times';
    spongebob.fillText(convertedText.join(""), 10, 140)
    this.setState({ inputText: convertedText.join("") });
  };

  render() {
    return (
      <div className="pageWrapper">
        <Header />
        <div className="entryArea">
          <canvas id='canvas'/>
          <h2>Enter text below</h2>
          <textarea
            onChange={this.textAreaOnChangeHandler}
            className="textArea"
            value={this.state.inputText}
          />
          <button onClick={this.convertHandler}>CoNvErT tExT</button>
        </div>

        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
