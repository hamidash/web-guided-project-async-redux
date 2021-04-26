import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchQuote } from '../actions';

const Quotes = (props) => {


  useEffect(() => {
    props.fetchQuote();
  }, []);

  const fetchKanyeQuote = (e) => {
    e.preventDefault();
    props.fetchQuote();
  }

  if (props.error) {
    return <h2>We got an error: {props.error}</h2>;
  }

  if (props.isFetching) {
    return <h2>Fetching quote for ya!</h2>;
  }

  return (
    <>
      <h2>Kanye says: {props.quote}</h2>
      <button onClick={fetchKanyeQuote}>Get new quote</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchQuote })(Quotes);