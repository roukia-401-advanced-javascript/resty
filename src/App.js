import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './components/form/form';
import Footer from './components/footer/footer';
import Header from './components/header/header.js';
import Results from './components/results/results.js';
import Help from './components/help/help.js';
import History from './components/history/history.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: null, //data results
      headers: null,
      loading: false,
      savedRequests:[]

    };
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
    console.log('loading in toggleLoading app.js....', this.state.loading)
  }
  // url.......  https://swapi.dev/api/people/
  // ..... https://gazahopes.herokuapp.com/api/v1/posts/

  
  handelUpdate = (count, results, headers) => {
    this.setState({ count, results, headers }); //rerender

  };
    // passed from component form with parameters url and option 
    // passed from component results with parametrs url and options
  fetchData = async (url, options) => {
    let raw = await fetch(url, options); // similar to superagent but need to converts it to json 
    console.log('my data after fetch :', raw);
    let data = await raw.json();
    console.log('my data after converting to json :', data);
    let count = data.count; 
    let results = data.results;
    let headers = {}; // if i have headers then i will loop over them i will store them in headers obj as headers1:value
    raw.headers.forEach((val, key) => headers[key] = val);
    console.log('raw.headers--------', raw.headers);
    // save the values of the url data in the state
    this.handelUpdate(count, results, headers);  
    // i need after it to stop the loading theme
    this.toggleLoading();
    // now my loading is false

  }
 // passed from component form contain array of objects the url and the method
  handelSavedRequests = (savedRequests)=>{
    console.log("the savedResquest from app.js before :",savedRequests)
    this.setState({savedRequests})
    console.log("the savedResquest from app.js after :",savedRequests)

  }
  render() {
    // what to render in my application ? 1.header inside it the routes for the (home / history /help) 2.footer 
    // home page will contains the form and the results
    return (
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/">
            {/* // the home page should render the form and the results  */}
            <Form loading={this.state.loading} handelUpdate={this.handelUpdate.bind(this)} fetchData={this.fetchData.bind(this)} toggle={this.toggleLoading.bind(this)} handelSavedRequests={this.handelSavedRequests} />
            <Results loading={this.state.loading} headers={this.state.headers} count={this.state.count} results={this.state.results} />
          </Route>

          <Route exact path="/history">
           {/* // the history will contain the method and the url and a button to click on so it will rerender the pre results pre not a new  */}
           {/* // pass to the histroy componente the request(url,method) to render it  */}
           {/* get the parametes from history and fire the fetchData function again  */}
           <History savedRequests={this.state.savedRequests} fetchData={this.fetchData.bind(this)} toggle={this.toggleLoading.bind(this)}/>
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



