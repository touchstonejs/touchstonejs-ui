'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var FieldControl = require('./FieldControl');
var FieldLabel = require('./FieldLabel');
var Item = require('./Item');
var ItemInner = require('./ItemInner');
var React = require('react/addons');

var blacklist = require('blacklist');

module.exports = React.createClass({
	displayName: 'LabelInput',

	propTypes: {
		alignTop: React.PropTypes.bool,
		children: React.PropTypes.node,
		className: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		label: React.PropTypes.string,
		readOnly: React.PropTypes.bool,
		value: React.PropTypes.string
	},

	getDefaultProps: function getDefaultProps() {
		return {
			readOnly: false
		};
	},

	render: function render() {
		var inputProps = blacklist(this.props, 'alignTop', 'children', 'first', 'readOnly');
		var renderInput = this.props.readOnly ? React.createElement(
			'div',
			{ className: 'field u-selectable' },
			this.props.value
		) : React.createElement('input', _extends({ className: 'field', type: 'text' }, inputProps));

		return React.createElement(
			Item,
			{ alignTop: this.props.alignTop, selectable: this.props.disabled, className: this.props.className, component: 'label' },
			React.createElement(
				ItemInner,
				null,
				React.createElement(
					FieldLabel,
					null,
					this.props.label
				),
				React.createElement(
					FieldControl,
					null,
					renderInput,
					this.props.children
				)
			)
		);
	}
});