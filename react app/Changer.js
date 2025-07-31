import React from 'react';
import './Changer.css';

class Changer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSwap = () => {
        this.setState({
            name: this.state.email,
            email: this.state.name
        });
    }

    render() {
        return (
            <div>
                <label>
                    <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleInputChange} />
                </label>
                <label>
                    <input
                        type='text'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                </label>
                <button type='button' onClick={this.handleSwap}>Change</button>
            </div>
        );
    }


}

export default Changer;