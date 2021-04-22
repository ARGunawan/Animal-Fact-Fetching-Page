import { Component } from "react";
import axios from "axios";

class DogPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomPicture: "",
      foundPic: false,
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

  render() {
    return (
      <div>
        <button className="search-button" onClick={this.handleSearchClickDog}>
          Search Dog
        </button>
        <br />
        <img src={this.state.randomPicture} />
      </div>
    );
  }
}

export default DogPart;
