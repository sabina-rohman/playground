import React, {Component} from 'react';
import './PetInput.css';

class PetInput extends Component{
    constructor(props){
        super(props);

        this.state={
            img: '',
            name: '',
            hobbies: [''],
            instructions: ''
        }

        this.handleChangeHobby = this.handleChangeHobby.bind(this);
    }

    handleChangeHobby(e){
        const index = Number(e.target.name.split('-')[1]);
        const hobbies = this.state.hobbies.map((hobby, i) => (
            i === index? e.target.value : hobby
        ))
        this.setState({hobbies});
    }

    render(){
        const {img, name, hobbies, instructions} = this.state;
        const {onClose} = this.props;
        let hobbiesInput = hobbies.map((hobby, i) => (
            <div 
                className="pet-form-line"
                key={`hobby-${i}`}
            >
                <label>{i+1}.
                    <input 
                        type="text"
                        name={`hobby-${i}`}
                        value={hobby}
                        size={30}
                        autoComplete="off"
                        placeholder="hobby"
                        onChange={this.handleChangeHobby}
                    />
                </label>
            </div>
        ));

        return(
            <div className="pet-form-container">
                <form className='pet-form' onSubmit={this.handleSubmit}>
                    <button
                        type='button'
                        className="close-button"
                        onClick={onClose}
                    >
                        X
                    </button>
                </form>
            </div>
        )
    }
}

PetInput.defaultProps = {
    onClose() {}
}

export default PetInput;