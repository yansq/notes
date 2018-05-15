import React, { Component } from 'react';
import './test.less';
import { Input, Checkbox } from 'antd';
const { TextArea } = Input;

export default class Test extends Component{
	constructor(){
		super();
		this.state={
			display: false,
			height: 0,
			textValue: '',
			checkBoxIsShow: false
		}
	}

	enter = (e) => {
		const that = this;
		e.preventDefault();
		let ele = document.getElementsByClassName('textarea');
		const textValue = e.target.value;
		
		this.setState(prevState => ({
			display: !prevState.display, 
			height: ele[0].offsetHeight
		}));

		this.refBox.addEventListener("webkitTransitionEnd", function(e) {
			that.setState(prevState => ({
				checkBoxIsShow: true,
				textValue: textValue
			}));

		}, false)
	}

	check = () => {

	}


	render(){
		return(
			<div className="box"  ref={(ref) => this.refBox = ref}  style={{ height: this.state.display ? this.state.height : '200px' }}> 
			    <TextArea
			      className="textarea" 
			      id="textArea" 
			      placeholder="Autosize height with minimum and maximum number of lines" 
			      autosize 
			      onPressEnter={this.enter}
			      style={{display: (this.state.display && this.state.checkBoxIsShow) && 'none'}}
			    />
			    <Checkbox className="checkbox" onChange={this.check} style={{display: this.state.checkBoxIsShow ? 'block' : 'none'}}>{this.state.textValue}</Checkbox>
			</div>
		)
	}
}
