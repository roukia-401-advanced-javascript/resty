import React from 'react';
import {Link} from 'react-router-dom';
import './history.scss';
class History extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      savedRequests: [],
    };
  }
  handleClick (i) {
    this.props.toggle();
    console.log('savedRequests',this.props.savedRequests);
    console.log('savedRequests[i]',this.props.savedRequests[i]);
    let url = this.props.savedRequests[i].url;
    let options = {
      method : this.props.savedRequests[i].method,
      headers: { 'Content-Type': 'application/json'},
      body: this.props.savedRequests[i].method === 'get' || this.props.savedRequests[i].method === 'delete'
        ? null : JSON.stringify(this.props.body),
    };
    this.props.fetchData(url, options);
  }
  save(){
    let savedRequests =  this.props.savedRequests;
    this.setState({savedRequests});
  }
  render() {
    // i want to render the method and url with click button to redirected to the home page with results 
    return (
      <>
          <section id = "historySection">
            <h1 id = "urlHistoryHeader">URL History</h1>
            {this.save}
            {/* // saverequest is array of objects  */}
            {this.props.savedRequests.map((item,i) => {
              return(
                <li key={i} >
                 <Link to='/' > <button id = "historyMethodButton" onClick={this.handleClick.bind(this,i)}>{item.method}</button> <a id ="historyUrl">{item.url}</a> </Link><br/>
                </li>   
              );
            } )}
          </section>
      </>
    );
  }
}
export default History;