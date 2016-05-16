var React = require('react');

//## Flat Button

// @PROPS:
// ClassName: String,
// Icon: String,
// onClick: Function, 

var FlatButton = React.createClass({

	//The flat button component has a set className of button and what ever className has been passed
    //in will be added on too the end.
	getButtonClassName: function() {
		var className = 'button-flat';
        if (this.props.type) {
            className += " " + this.props.type;
        } 
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return className;
	},

	//Similar to the button className function, this takes in an icon prop. Make sure that the icon you pass in is
    //part of the linear icon pack.
	getIcon: function() {
		return (
			<i className={' icon icon-' + this.props.icon} style={this.getStyle()}></i>
		)
	},

	getText: function() {
		if (this.props.text) {	
			return (
				<span>	
					{this.props.text}
				</span>
			)
		}
	},

	getStyle: function() {
		if (this.props.text && this.props.icon) {
			return ({
				marginRight: 5
			})
		}
	},

	//Renders the entire flat button.
	render: function() {
		return (
			<button className={this.getButtonClassName()} onClick={this.props.onClick}>
				{this.getIcon()}
				{this.getText()}				
			</button>
		);
	}

});

module.exports = FlatButton;