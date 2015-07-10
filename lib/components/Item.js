'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'Item',

	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string,
		showDisclosureArrow: React.PropTypes.bool
	},

	render: function render() {
		var className = classnames('Item', {
			'Item--has-disclosure-arrow': this.props.showDisclosureArrow
		}, this.props.className);

		return React.createElement('div', _extends({}, this.props, { className: className }));
	}
});