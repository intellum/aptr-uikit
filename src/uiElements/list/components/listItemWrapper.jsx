var React = require('react');

var ListItemWrapper = React.createClass({

	renderWrapper: function() {
		if (this.props.onClick && !this.props.buttons) {
			return (
				<a 
					className="list-item-clickable" 
					onClick={this.props.onClick} 
					aria-label={this.props['aria-label']} 
					tabIndex="0"
					href={this.props.href || null}
					onKeyPress={(event) => {						
						if (event.keyCode === 0) {
							return this.props.onClick(event);
						}
					}}
				>
					<div className="list-item-inner clearfix">
					{this.props.children}
					</div>
				</a>
			)
		} else {
			return (
				<div className="list-item-inner clearfix">
					{this.props.children}
				</div>
			)
		}
	},

	render: function() {
		return this.renderWrapper()
	}
});

module.exports = ListItemWrapper;