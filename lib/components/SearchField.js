'use strict';

var blacklist = require('blacklist');
var classnames = require('classnames');
var React = require('react/addons');
var Tappable = require('react-tappable');

module.exports = React.createClass({
	displayName: 'SearchField',
	propTypes: {
		className: React.PropTypes.string,
		onChange: React.PropTypes.func,
		onClear: React.PropTypes.func,
		placeholder: React.PropTypes.string,
		value: React.PropTypes.string
	},

	getInitialState: function getInitialState() {
		return {
			isFocused: false
		};
	},

	getDefaultProps: function getDefaultProps() {
		return {
			value: ''
		};
	},

	handleClear: function handleClear() {
		this.refs.input.getDOMNode().focus();
		this.props.onClear();
	},

	handleChange: function handleChange(e) {
		this.props.onChange(e.target.value);
	},

	handleBlur: function handleBlur(e) {
		this.setState({
			isFocused: false
		});
	},

	handleFocus: function handleFocus(e) {
		this.setState({
			isFocused: true
		});
	},

	renderClear: function renderClear() {
		if (!this.props.value.length) return;
		return React.createElement(Tappable, { className: 'SearchField__icon SearchField__icon--clear', onTap: this.handleClear });
	},

	renderCancel: function renderCancel() {
		var className = classnames('SearchField__cancel', {
			'is-visible': this.state.isFocused || this.props.value
		});
		return React.createElement(
			Tappable,
			{ className: className, onTap: this.props.onCancel },
			'Cancel'
		);
	},

	render: function render() {
		var className = classnames('SearchField', {
			'is-focused': this.state.isFocused || this.props.value
		});
		var props = blacklist(this.props, 'className', 'placeholder', 'type');

		return React.createElement(
			'div',
			{ className: className },
			React.createElement(
				'label',
				{ className: 'SearchField__field' },
				React.createElement(
					'div',
					{ className: 'SearchField__placeholder' },
					React.createElement('span', { className: 'SearchField__icon SearchField__icon--search' }),
					!this.props.value.length ? this.props.placeholder : null
				),
				React.createElement('input', { ref: 'input', value: this.props.value, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, className: 'SearchField__input' }),
				this.renderClear()
			),
			this.renderCancel()
		);
	}
});