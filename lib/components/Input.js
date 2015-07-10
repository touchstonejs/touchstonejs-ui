'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Item = require('./Item');
var ItemContent = require('./ItemContent');
var ItemInner = require('./ItemInner');
var React = require('react/addons');

var blacklist = require('blacklist');

module.exports = React.createClass({
	displayName: 'Input',

	propTypes: {
		className: React.PropTypes.string,
		children: React.PropTypes.node,
		disabled: React.PropTypes.bool
	},

	render: function render() {
		var inputProps = blacklist(this.props, 'children', 'className');

		return React.createElement(
			Item,
			{ className: this.props.className, selectable: this.props.disabled, component: 'label' },
			React.createElement(
				ItemInner,
				null,
				React.createElement(
					ItemContent,
					{ component: 'label' },
					React.createElement('input', _extends({ className: 'field', type: 'text' }, inputProps))
				),
				this.props.children
			)
		);
	}
});