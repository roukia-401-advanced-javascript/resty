import React from 'react';
import './form.scss';
import History from '../history/history';


var method = 'get'
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      savedRequests: JSON.parse(localStorage.getItem('history')) || [],
      body: null,
    };
  }
  handelInput = (event) => {
    // store url state.url
    let url = event.target.value;
    console.log('event.target.value url', url);
    this.setState({ url }); //rerender
  }
  handleMethod = (e) => {
    //store method state.method
    method = e.target.value;
    console.log('method selected', method);
    this.setState({ method });
  }
  handelBody = (e) => {
    let body = e.target.value;
    this.setState({ body });
  }
  // go button 
  handleClick =async (e) => {
    e.preventDefault();
    this.props.toggle();
    // first save data to local storage 
    this.savedToLocalStorage();
    //get url
    let url = this.state.url
    let options = {
      method: this.state.method,
      headers: { 'Content-Type': 'application/json' },
      // if method is get or delete then no need for the body else i will get it 
      body: this.state.method === 'get' || this.state.method === 'delete'
        ? null : JSON.stringify(this.state.body),
    };
    this.fetchData(url, options);
  }


  // create method to save method and url to local storage 
  savedToLocalStorage = () => {
    //store both method and url in array of objects
    this.state.savedRequests.push({ method: this.state.method, url: this.state.url });
    // save array to local storage 
    localStorage.setItem('history', JSON.stringify(this.state.savedRequests))
  }

  fetchData = async (url, options) => {
    let raw = await fetch(url, options);
    console.log('raw.......', raw);
    let data = await raw.json();
    console.log('data,,,,,,,,,', data);
    let count = data.count;
    let results = data.results;
    let headers = {};
    raw.headers.forEach((val, key) => headers[key] = val);
    console.log('raw.headers--------', raw.headers);
    // send count, results, headers from child (form) to parent (app)
    this.props.handelUpdate(count, results, headers);
    // {this.props.loading == true} ? {this.props.loading = false} : {this.props.loading = false}
    this.props.loading === true ? this.props.toggle() : console.log("loading")

  }


  render() {
    return (
      <main>
        <div id="inputDiv" >
          <p>URL: </p>
          <input type="text" placeholder='https://localhost:3000/categories' onChange={this.handelInput} />
          <button onClick={this.handleClick}>Go!</button>
        </div>
        <form onClick={this.handleMethod} id='form'>
          <input type="radio" id="get" name="method" value="get" defaultChecked />
          <label htmlFor="get">GET</label>
          <input type="radio" id="post" name="method" value="post" />
          <label htmlFor="post">POST</label>
          <input type="radio" id="put" name="method" value="put" />
          <label htmlFor="put">PUT</label>
          <input type="radio" id="delete" name="method" value="delete" />
          <label htmlFor="delete">DELETE</label>
        </form>
        <textarea onChange={this.handelBody}></textarea>
        {/* send the saved request array and the body to the history  */}
        <History savedRequests={this.state.savedRequests} fetchData={this.fetchData} body={this.state.body} />
      </main>
    );
  }

}

export default Form;


