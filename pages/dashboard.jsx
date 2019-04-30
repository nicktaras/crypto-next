import Link from 'next/link';
import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }

  convertValue(_value) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(_value)
  }

  async componentDidMount() {
    this.setState({ data: 'loading...' });
    axios.get('https://v2.ethereumprice.org:8080/snapshot/btc/usd/waex/24h?_=1516101017976')
      .then((response) => {
        const coinValue = this.convertValue(response.data.data.price)
        this.setState({
          data: coinValue
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    let { data } = this.state;
    return (
      <React.Fragment>
        <Link href="/">
          <a>Home</a>
        </Link>
        <p>{data}</p>
      </React.Fragment>
    );
  }
}

export default Dashboard;

