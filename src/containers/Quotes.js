import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'

class Quotes extends Component {

  render() {
    const {upvoteQuote, downvoteQuote, removeQuote} = this.props
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(quote => <QuoteCard upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} removeQuote={removeQuote} key={quote.id} quote={quote} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const msp = state => {
  return({
    quotes: state.quotes
  })
}
//add arguments to connect as needed
export default connect(msp, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
