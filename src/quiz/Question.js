import React, { Component } from 'react';

class Question extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        e.preventDefault();
        const {setScore, setCurrent, question} = this.props;

        if (e.target.value === question.correct) {
            setScore(this.props.score + 1);
        }

        setCurrent(this.props.current + 1);
    }

    render() {
        const { question } = this.props;
        return (
            <div className='well'>
                <h3>{question.text}</h3>
                <hr />
                <ul className='list-group'>
                    {
                        this.props.question.choices.map(choice => {
                            return (
                                <li className='list-group-item' key={choice.id}>
                                    {choice.id}
                                    <input type='radio'
                                        onChange={this.onChange}
                                        name={question.id}
                                        value={choice.id} />
                                    {choice.text}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Question;
