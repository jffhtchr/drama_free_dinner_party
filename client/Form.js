import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addRoom } from './redux/roomReducer';


class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            width:0,
            length:0
        }
        this.handleWidthChange = this.handleWidthChange.bind(this)
        this.handleLengthChange = this.handleLengthChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleWidthChange(event) {
        this.setState({width: event.target.value});
    }

    handleLengthChange(event) {
        this.setState({length: event.target.value});
    }

    handleClick(e){
        e.preventDefault();
        var width = this.state.width;
        var length = this.state.length;
        if(isNaN(width) || isNaN(length)){
            alert('Please enter real number values :)')
            document.getElementById('canvas-form').reset()
        }
    }
    render(){
       
        return (
            <div id="form-wrapper">
                <form id="canvas-form" onSubmit={this.props.handleSubmit}>
                    What are the dimensions of this room?<br/>
                    <input type="text" name="x" placeholder="width" onChange={this.handleWidthChange} ></input>
                    <input type="text" name="y" placeholder="length" onChange={this.handleLengthChange}></input>
                    <br/><br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
   room: state.room
}

function mapDispatchToProps(dispatch){
    return {
        handleSubmit(event){
            event.preventDefault();
            var width = event.target.x.value;
            var length = event.target.y.value;
            if(isNaN(width) || isNaN(length)){
                alert('Please enter real number values :)')
            }else{
                const payload = {width: event.target.x.value, length:event.target.y.value}
                dispatch(addRoom(payload))
                .then(() => console.log("Good job creating a room!"))
            }
        }
    }
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)((Form))
export default FormContainer;