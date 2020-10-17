import React from 'react';
import './form.scss';

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
    // store url state.url //rerender
    let url = event.target.value;
    this.setState({ url }); //means url:url
  }
  handleMethod = (e) => {
    //store method state.method //rerender
    method = e.target.value;
    this.setState({ method }); //means method:method
  }
  handelBody = (e) => {
    //store body state.body //rerender
    let body = e.target.value;
    this.setState({ body }); //means body:body
  }
  // go button 
  handleClick =async (e) => {
    e.preventDefault();
    // add the loading feature to be displayed before the results display 
    this.props.toggle(); //>> true
    // save data to local storage 
    this.savedToLocalStorage();
    //get url, method, body >> go to get the data of this url 
    let url = this.state.url
    let options = {
      method: this.state.method,
      headers: { 'Content-Type': 'application/json' },
      // if method is get or delete then no need for the body else i will get it 
      body: this.state.method === 'get' || this.state.method === 'delete'
        ? null : JSON.stringify(this.state.body),
    };
    // get the data of this url by fetch (pass url and options to the parent app.js and fire the function there)
    this.props.fetchData(url, options);
    // pass to app.js the savedRequests array
    this.props.handelSavedRequests(this.state.savedRequests);
  }
  // create method to save method and url to local storage 
  savedToLocalStorage = () => {
    //store both method and url in array of objects
    this.state.savedRequests.push({ method: this.state.method, url: this.state.url });
    console.log('this is the savedReauest array og objects :',this.state.savedRequests)
    // save array to local storage 
    localStorage.setItem('history', JSON.stringify(this.state.savedRequests))
    console.log('this is the savedReauest array og objects after saving to local storage :',this.state.savedRequests)

  }
  render() {
    // what to render in the form ?
    // fisrt input url , choses method, input text for body , submit the form 
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
        <section id = "textareaSection">
        <textarea placeholder="Enter the body in Json format..." onChange={this.handelBody}></textarea>
        </section>
      </main>
    );
  }

}

export default Form;


