import React, {Component} from 'react'

class Thesaurus extends Component {
    constructor() {
        super() 
        this.textInput = React.createRef();
        this.state = {
            synonyms: [],
            word: '',
            inUse: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.textInput.current.focus()
    }
    handleChange(word)  {
        this.setState({word: word})
    }

    handleClick() {
        let url = `https://wordsapiv1.p.rapidapi.com/words/${this.state.word}/synonyms`
        fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com", 
                "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY
            }
        })
        .then(res => res.json())
        .then(word => {
            console.log(word.synonyms)
            this.setState({inUse: true})
            let synonyms = word.synonyms
            this.setState({synonyms: synonyms})                    
            this.textInput.current.focus()
        })
    }
    formPreventDefault(e) {
        e.preventDefault()
    }

    render() {
        const synArr = !this.state.synonyms || this.state.synonyms.length === 0 ?
            <h4>No synonyms found</h4> :
            this.state.synonyms.map((item, index) => {
                return <div>
                            <h4 key={index}>{item}</h4>
                       </div>
            })
        return (
            <div>
                <h2>Synonyms</h2>
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
                        {synArr}
                    </div>
                    : null
                }
                
            </div>
        )
    }
}
export default Thesaurus
