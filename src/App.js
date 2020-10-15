import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './components/form/form';
import Footer from './components/footer/footer';
import Header from './components/header/header.js';
import Results from './components/results/results.js';
import Help from './components/help/help.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: null, //data results
      headers: null,
      loading: false,

    };
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
    console.log('loading in toggleLoading app.js....', this.state.loading)
  }
  // url.......  https://swapi.dev/api/people/

  // came from child form with parameters url and option 
  handelUpdate = (count, results, headers) => {
    this.setState({ count, results, headers });

  };
  render() {
    return (
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/">
            <Form loading={this.state.loading} handelUpdate={this.handelUpdate.bind(this)} toggle={this.toggleLoading.bind(this)} />
            <Results loading={this.state.loading} headers={this.state.headers} count={this.state.count} results={this.state.results} />
          </Route>

          <Route exact path="/history">
            <div>This is history page </div>
          </Route>

          <Route exact path="/help">
            <Help />
          </Route>

        </Switch>

        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;



