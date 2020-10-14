import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Form from './components/form/form';
import Footer from './components/footer/footer';
import Header from './components/header/header.js';
import Results from './components/results/results.js';
import History from './components/history/history';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count:0,
      results: [],
      headers: [],
      // results: null,
      // headers:'',
    };
  }
  // url.......  https://swapi.dev/api/people/

  // came from child form with parameters url and option 
  handelUpdate = async (url,options)=> {
    // console.log('url from app.js ', url);
    let raw = await fetch(url,options);
    console.log("this is raaaw".raw)
    let data = await raw.json();
    console.log("this is data after fetch",data)
    console.log("this is raaaw.headeeers",raw.headers)
    let headers={};
    raw.headers.forEach( (value, key) => {
      headers[key] = value;

    });
    
    this.setState({headers: headers, results: data.results, count: data.count });
  };

 
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form handelUpdate={this.handelUpdate}/>
        <Results headers={this.state.headers} count={this.state.count} results={this.state.results} />
        {/* // i can use anything inside handleupdate in the history child by the props */}
        <History fetchData={this.handelUpdate}/> 
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
//github