import React, {Component} from "react";
import {Card} from "react-bootstrap";

class Dictionary extends Component {
    constructor() {
        super()
        this.textInput = React.createRef();
        this.state = {
            definitions: [],
            word: "",
            submittedWord: "",
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
                this.setState({submittedWord: word.word})
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
            <h4 style={{marginLeft: 10}}>No definitions found.</h4> :        
            this.state.definitions.map((item, index) => {
            return (
                <Card 
                    style={{width: '15rem', margin: 10}}
                    bg="success"
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
                <form input="true" 
                    onSubmit={this.formPreventDefault}
                    style={{marginLeft: 20, marginTop: 10}}
                >
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
                        <h2 style={{marginLeft: 20, marginTop: 10}}>{this.state.submittedWord}</h2>
                        <div className="definitions">
                            {defArr}
                        </div>
                    </div>
                : null}
            </div>
        
        )
    }
}
export default Dictionary