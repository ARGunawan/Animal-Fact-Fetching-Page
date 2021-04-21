import {Component} from 'react';
import axios from 'axios';

class GetRandomDog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomPicture_Dog: "",
            randomFact_Dog: [],
            foundPic_Dog: false,
            foundFact_Dog: false,
        }
    }

    handleSearchClickDog = async () => {
        let linkToDogFact = 'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1';
        let linkToDogPic = 'https://dog.ceo/api/breeds/image/random';

        try{
            //get link information for dog pictures and dog facts
            let response = await axios.get(linkToDogFact);
            let response_pic = await axios.get(linkToDogPic);
            
           let randNum = Math.floor(Math.random() * 5) + 1;
           console.log(response_pic.data['file']);
           console.log(this.state.randomFact);
            this.setState({randomFact_Dog: response.data.text[randNum], foundFact_Dog:true});
            //this.setState({randomPicture_Dog: response_pic.data['file'], foundPic_Dog:true});

        }
        catch{
            //does nothing here either
        }
    }

    render() {
        return(
            <div>
                <button className = "search-button" onClick={this.handleSearchClickDog}>Search Dog</button>
                <p>{this.state.randomFact_Dog}</p>
                <img src = {this.state.randomPicture_Dog}/>
                <br />
            </div>

        )
    }
}
export default GetRandomDog;
