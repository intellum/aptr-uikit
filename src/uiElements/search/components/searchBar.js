var React = require('react');
var Button = require('../../buttons/components/button');
var classNames = require('classnames') 

var SearchBar = React.createClass({

	getInitialState: function() {
		return {
			value: ''
		}
	},

	getButton: function() {
		var Height = false;

		if (this.props.isSmall === true) {
			var Height = true

		}

		if (this.state.value.length === 0) {
			return (
				<Button icon='magnifier' className='search-bar-button' isSmall={Height} aria-label="Search"/>
			)
		} else {
			return (
				<Button icon='cross-circle' className='primary search-bar-button' onClick={this.onButtonClicked} isSmall={Height} aria-label="Close search"/>
			)
		}
	},

	getClassName: function() {
		if (this.props.isSmall) {
			return classNames('search-bar', this.props.className, 'is-small');
		}
		else { 
			return classNames('search-bar', this.props.className);
		}
	},

	onButtonClicked: function(event) {
		event.preventDefault();
		this.setState({
			value: ''
		})
		this.props.onChange('');
	},

	onChange: function(event) {
		var value = event.target.value;
		this.props.onChange(value);

		this.setState({
			value: value
		})
	},

	renderPlaceHolder: function() {
		if (this.props.placeholder) {
			return this.props.placeholder;
		};
	},

	render: function() {
		return (
			<form className={this.getClassName()} role="search">
				<input className='search-bar-input' value={this.state.value} onChange={this.onChange} placeholder={this.renderPlaceHolder()} aria-label="Search input field"/>
				{this.getButton()}
			</form>								
		);
	}
});

module.exports = SearchBar;