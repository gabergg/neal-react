import React from "react";
import PropTypes from 'prop-types';
import { HorizontalSplit } from "./horizontal-split";

export class CustomerQuote extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
  };

  render() {
    return (
      <div className="neal-customer-quote">
        <i className="fa fa-quote-left"></i>
        <div className="neal-customer-quote-quote">{this.props.children}</div>
        <div className="neal-customer-quote-profile">
          <span className="neal-customer-quote-name">{this.props.name}</span>
          <span className="neal-customer-quote-title">{this.props.title ? `, ${this.props.title}` : null}</span>
        </div>
      </div>
    );
  }
}

export class CustomerQuotes extends React.Component {
  static propTypes = {
    // TODO: Enforce CustomerQuote type
    children: PropTypes.arrayOf(PropTypes.element),
  };

  render() {
    return (
      <div className="neal-customer-quotes">
        <HorizontalSplit>
          {this.props.children}
        </HorizontalSplit>
      </div>
    );
  }
}

CustomerQuotes.Quote = CustomerQuote;
