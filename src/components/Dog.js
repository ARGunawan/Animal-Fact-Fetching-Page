import { Component } from "react";
import axios from "axios";

class DogPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomPicture: "",
      foundPic: false,
      randomFox: "",
      foundFox: false,
    };
  }

  handleSearchClickDog = async () => {
    let linkToDogPic = "https://dog.ceo/api/breeds/image/random";
    try {
      //get the link info
      let response_pic = await axios.get(linkToDogPic);

      //set the state to the random dog picture
      this.setState({
        randomPicture: response_pic.data["message"],
        foundPic: true,
      });

      //console.log(this.state.randomFact);
    } catch {
      //does nothing
    }
  };

  handleSearchClickFox = async () => {
    let linkToFoxPic = "https://randomfox.ca/floof/";
    try {
      //get the link info
      let response_fox = await axios.get(linkToFoxPic);

      console.log(response_fox.data);

      //set the state to the random fox picture
      this.setState({
        randomFox: response_fox.data["image"],
        foundFox: true,
      });
      //console.log(this.state.randomFact);
    } catch {
      //does nothing
    }
  };
  render() {
    return (
      <div>
        <button className="search-button" onClick={this.handleSearchClickDog}>
          Click for Dog Picture
        </button>
        <br />
        <img src={this.state.randomPicture} />
        <br />
        <button className="search-button" onClick={this.handleSearchClickFox}>
          Click for Fox Picture
        </button>
        <br />
        <img src={this.state.randomFox} />
      </div>
    );
  }
}

export default DogPart;
