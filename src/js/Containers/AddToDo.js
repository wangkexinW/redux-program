import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AddToDoAction} from '../Actions/actions.js';

class AddToDo extends Component {
    render () {
        console.log('AddToDo'); 
        return (
            <div>
                <input type="text" ref='inp'/>
                <button onClick={() => {
                    this.props.onAddToDo(this.refs.inp.value);
                }}>ADD</button>
            </div>    
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddToDo: (addText) => {
            dispatch( AddToDoAction(addText) );
        }
    }
}

export default connect(null, mapDispatchToProps)(AddToDo);