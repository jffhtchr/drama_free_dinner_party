import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class Canvas extends Component {
    constructor(props){
        super(props);
        this.state = {
            mouseIsDown: false,
            startX: null,
            startY: null,
            width:0,
            length:0
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    handleClick(e){
        var c=document.getElementById("myCanvas");
        var ctx=c.getContext("2d");
        var rect = c.getBoundingClientRect();
        var x = e.clientX - rect.left - 10;
        var y = e.clientY - rect.top - 10;
        ctx.fillStyle = "orange";
        ctx.rect(x,y,20,20);
        ctx.stroke();
        ctx.fill();
    }

    handleMouseDown(e){
        var c=document.getElementById("myCanvas");
        var ctx=c.getContext("2d");
        var rect = c.getBoundingClientRect();
        this.setState({
            mouseIsDown:true,
            startX:e.clientX - rect.left,
            startY:e.clientY - rect.top
        })
        c.style.cursor="crosshair";
    }

    handleMouseUp(e){
        var c=document.getElementById("myCanvas");
        var ctx=c.getContext("2d");
        var rect = c.getBoundingClientRect();
        var startX = this.state.startX;
        var startY = this.state.startY;
        var mouseX = e.clientX - rect.left;
        var mouseY = e.clientY - rect.top;
        this.setState({mouseIsDown:false})
        ctx.beginPath();
        var startX = this.state.startX;
        var startY = this.state.startY;
        var mouseX = e.clientX - rect.left;
        var mouseY = e.clientY - rect.top;
        ctx.fillStyle = "orange";
        ctx.rect(startX,startY,mouseX-startX,mouseY-startY);
        ctx.fill();
        c.style.cursor="default";
    }

    render(props){
        return (
            <div id="canvas-wrapper">
                <canvas id="myCanvas" width={this.props.length} height={this.props.width} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>This browser does not support HTML canvas :(</canvas>
            </div>
        );
    }
}

function mapStateToProps(state){
    room:state.room.data
}

function mapDispatchToProps(dispatch){
}

const CanvasContainer = connect(mapStateToProps, mapDispatchToProps)((Canvas))
export default CanvasContainer;

