import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Form from './components/form/form';
import Footer from './components/footer/footer';
import Header from './components/header/header.js';
import Results from './components/results/results.js';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count:0,
      results: [],
      headers: [],
    };
  }
  // url.......  https://swapi.dev/api/people/
  handelUpdate = async (url)=> {
    console.log('url from app.js ', url);
    let raw = await fetch(url);
    let data = await raw.json();
    this.setState({headers: raw.headers, results: data.results, count: data.count });
  };

  // "headers": {},
  // "count": 82,
  // "results": [


    // "count": 82,
    // "results": [
    //      {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form handelUpdate={this.handelUpdate}/>
        <Results headers={this.state.headers} count={this.state.count} results={this.state.results} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
//github