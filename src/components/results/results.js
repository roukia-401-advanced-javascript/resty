import React from 'react';
import './results.scss';
import { If, Then, Else } from '../if/if.js';
import ReactJson from 'react-json-view';
class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (
      <section>
      {/* // my loading now is true go to else and show the theme then continue and back to the code after handleupdate */}
        <If condition={!this.props.loading}> 
          <Then>
            {/* // display the results */}
            <div data-testid="results">
            <ReactJson src={this.props} theme="monokai" />
            </div>

          </Then>
          <Else>
            {/* display the theme */}

            <div className="about">
              <a className="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank" rel="noopener noreferrer">
                <span className="icon"></span>
              </a>
              <a className="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank" rel="noopener noreferrer">
                <span className="icon"></span>
              </a>
              <a className="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank" rel="noopener noreferrer">
                <span className="icon"></span>
              </a>
            </div>

            <div className="content">
              <div className="loading">
                <p>loading</p>
                <span></span>
              </div>
            </div>
          </Else>
        </If>
      </section>
    )
  }
}

export default Results;


