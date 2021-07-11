import React, {Component} from "react";
import {Card} from "react-bootstrap";

class Dictionary extends Component {
    constructor() {
        super()
        this.textInput = React.createRef();
        this.state = {
            definitions: [],
            word: "",
            inUse: false 
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.textInput.current.focus()
    }
    handleChange(word) {
        this.setState({word: word})
    }
    handleClick() {
        let url = `https://wordsapiv1.p.rapidapi.com/words/${this.state.word}/definitions`
        fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com", 
                "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY
                }
            })
            .then(res => res.json())
            .then(word => {
                console.log(word.definitions)
                this.setState({inUse: true})
                let definitions = word.definitions
                this.setState({definitions: definitions})
                this.textInput.current.focus()
                this.textInput.current.value = ""
                console.log(url)
        })      
    }
    formPreventDefault(e) {
        e.preventDefault()
    }
    render() {
        const defArr = !this.state.definitions || this.state.definitions.length === 0 ?
            <h4>No definitions found.</h4> :        
            this.state.definitions.map((item, index) => {
            return (
                <Card 
                    style={{width: '15rem'}}
                    bg="secondary"
                    key={index}
                    text="white">
                    <Card.Body>
                        <Card.Title>{item.partOfSpeech}</Card.Title>
                        <Card.Text>{item.definition}</Card.Text>
                    </Card.Body> 
                </Card>

          
               )
        })
        return (
            <div>
                <form input="true" onSubmit={this.formPreventDefault}>
                    <input
                        ref={this.textInput}
                        placeholder="Enter word"
                        type="text"
                        onChange={(e) => this.handleChange(e.target.value)}
                    />
                <button onClick={() => this.handleClick()}>Submit</button>
                </form>
                {this.state.inUse ?
                    <div>
                        <h2>Definitions of {this.state.word}:</h2>
                        <div className="dictionary">
                            {defArr}
                        </div>
                    </div>
                : null}
            </div>
        
        )
    }
}
export default Dictionary