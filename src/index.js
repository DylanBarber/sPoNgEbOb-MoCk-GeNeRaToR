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
  drawSpongebobImage = () => {
    let spongebob = document.getElementById('canvas').getContext('2d');
    let base_image = new Image();
    base_image.src = './spongebob.jpg';
    base_image.onload = () => {
      spongebob.drawImage(base_image, 0, 0, base_image.width,    base_image.height,
        0, 0, 307.88, 153.94)
      this.drawMeme()
    }
  }
  componentDidMount = () => {
    this.drawSpongebobImage()
  }
  drawMeme = () => {
    let spongebob = document.getElementById('canvas').getContext('2d');
    spongebob.fillStyle = 'white';
    spongebob.font = '32px monospace';
    
    if (this.state.inputText.length > 15 && this.state.inputText.length <= 30) {
      spongebob.fillText(this.state.inputText.slice(0,15), 6, 30)
      spongebob.fillText(this.state.inputText.slice(15, this.state.inputText.length), 6, 140)
    } else if (this.state.inputText.length > 30){
      return
    } else {
        spongebob.fillText(this.state.inputText, 6, 140)
    }
  }
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
    this.setState({ inputText: convertedText.join("") });
    this.drawSpongebobImage()
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
