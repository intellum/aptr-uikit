'use strict';

var React = require('react');
var Button = require('../buttons/button');

// @props:
// {
//    	buttonType: string
//    	onPreviousPageClicked: function
//    	onNextPageClicked: function
//		currentPage: value
//		totalPages: value
//	}

var Pagination = React.createClass({
	displayName: 'Pagination',


	getPageCount: function getPageCount() {
		var currentPage = this.props.currentPage;
		var totalPages = this.props.totalPages;

		return currentPage + '/' + totalPages;
	},

	renderToolTipLeft: function renderToolTipLeft() {
		if (this.props.toolTipLeftButton) {
			return this.props.toolTipLeftButton;
		}
	},

	renderToolTipLeftPosition: function renderToolTipLeftPosition() {
		if (this.props.toolTipLeftButtonPosition) {
			return this.props.toolTipLeftButtonPosition;
		}
	},

	renderToolTipRight: function renderToolTipRight() {
		if (this.props.toolTipRightButton) {
			return this.props.toolTipRightButton;
		}
	},

	renderToolTipRightPosition: function renderToolTipRightPosition() {
		if (this.props.toolTipRightButtonPosition) {
			return this.props.toolTipRightButtonPosition;
		}
	},

	isPreviousDisabled: function isPreviousDisabled() {
		if (this.props.currentPage === 1) {
			return true;
		} else {
			return false;
		}
	},

	isNextDisabled: function isNextDisabled() {
		if (this.props.currentPage === this.props.totalPages) {
			return true;
		} else {
			return false;
		}
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'pagination' },
			React.createElement(Button, {
				className: 'pagination-previous-page',
				type: this.props.buttonType,
				icon: 'arrow-left',
				disabled: this.isPreviousDisabled(),
				onClick: this.props.onPreviousPageClicked,
				toolTip: this.renderToolTipLeft(),
				toolTipPosition: this.renderToolTipLeftPosition()
			}),
			React.createElement(
				'div',
				{ className: 'page-count' },
				this.getPageCount()
			),
			React.createElement(Button, {
				className: 'pagination-next-page',
				type: this.props.buttonType,
				icon: 'arrow-right',
				disabled: this.isNextDisabled(),
				onClick: this.props.onNextPageClicked,
				toolTip: this.renderToolTipRight(),
				toolTipPosition: this.renderToolTipRightPosition()
			})
		);
	}

});

module.exports = Pagination;