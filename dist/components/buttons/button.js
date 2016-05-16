'use strict';

var React = require('react');

// @props:
// {
//     icon: String
//     text: String
//     className: String - primary, secondary and alert
//     onClick: Function, Required
//     iconPosition: String
//     disabled: Boolean
//}

var Button = React.createClass({
    displayName: 'Button',


    //The button component has a set className of button and what ever className has been passed
    //in will be added on too the end.
    getButtonClassName: function getButtonClassName() {
        var className = 'button';
        if (this.props.type) {
            className += " " + this.props.type;
        }
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return className;
    },

    getIconPositionClassName: function getIconPositionClassName(position) {
        return 'button-icon-position-' + position + ' ' + this.getIconClassName();
    },

    //Similar to the button className function, this takes in an icon prop. Make sure that the icon you pass in is
    //part of the linear icon pack.
    getIconClassName: function getIconClassName() {
        return 'icon icon-' + this.props.icon;
    },

    getLeftIcon: function getLeftIcon() {
        if (this.props.icon) {
            if (this.props.iconPosition === 'left' || !this.props.iconPosition) {
                if (!this.props.text) {
                    return React.createElement(
                        'i',
                        { className: this.getIconClassName() },
                        ' '
                    );
                }
                return React.createElement(
                    'i',
                    { className: this.getIconPositionClassName('left') },
                    ' '
                );
            }
        }
    },

    //IconPosition should only be string with right or left, without it the position of the icon
    //will default to left.
    getRightIcon: function getRightIcon() {
        if (this.props.icon && this.props.iconPosition === 'right') {
            return React.createElement(
                'i',
                { className: this.getIconPositionClassName(this.props.iconPosition) },
                ' '
            );
        }
    },

    render: function render() {
        return React.createElement(
            'button',
            { disabled: this.props.disabled, className: this.getButtonClassName(), onClick: this.props.onClick },
            this.getLeftIcon(),
            this.props.text,
            this.getRightIcon()
        );
    }

});

module.exports = Button;