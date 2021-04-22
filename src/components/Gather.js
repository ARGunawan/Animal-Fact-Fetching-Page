import { Component } from "react";
import axios from "axios";

class GetRandom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomPicture: "",
      randomFact: [],
      foundPic: false,
      foundFact: false,
    };
  }

  handleSearchClickCat = async () => {
    let linkToCatFact = "https://cat-fact.herokuapp.com/facts";
    let linkToCatPic = "https://aws.random.cat/meow";

    try {
      //get the link info
      let response = await axios.get(linkToCatFact);
      let response_pic = await axios.get(linkToCatPic);
      //console.log(response_pic.data['file']);

      //since the link info only returns 5 different facts, randNum choose one of the five
      let randNum = Math.floor(Math.random() * 5) + 1;

      //set the state to the random fact
      this.setState({
        randomFact: response.data[randNum].text,
        foundFact: true,
      });
      //set the state to the random cat picture
      this.setState({
        randomPicture: response_pic.data["file"],
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
        <button className="search-button" onClick={this.handleSearchClickCat}>
          Search Cat
        </button>
        <br />
        <p>{this.state.randomFact}</p>
        <img src={this.state.randomPicture} />
      </div>
    );
  }
}

export default GetRandom;
