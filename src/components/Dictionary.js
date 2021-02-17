import React, {Component} from "react";

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
                <div key={index}>
                    <h4>{item.partOfSpeech}</h4>
                    <h5>{item.definition}</h5>
                </div>
          
               )
        })
        return (
            <div>
                <h2>Definitions</h2>
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
                        <h2>{this.state.word}</h2>
                        {defArr}
                    </div>
                : null}
            </div>
        
        )
    }
}
export default Dictionary