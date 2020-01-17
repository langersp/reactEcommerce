import React, { Component } from "react";
import { connect } from 'react-redux';
import { handleReceiveProducts } from '../actions/products';
import Filters from './filters';
import Products from './products';
import "../App.css";

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleReceiveProducts())
  }

  render() {
    const { error, loading } = this.props;

    if (error) {
      return <div>Error! {error}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="app">
        <Filters />
        <Products />
      </div>
    )
  };
}

const mapStateToProps = state => ({
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(App);