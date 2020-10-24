import React from 'react';
import './help.scss';
function Help() {

  return (
    <>
      <h2 id = "h2Help">Welcome To Help Page </h2>
      <h3 id = "h3Help">Here are the steps to run the Resty application:</h3>

      <ol className="d">
        <li className = "helpList">Enter url</li>
        <li  className = "helpList"> choose the method</li>
        <li  className = "helpList">Enter the body if required</li>
        <li  className = "helpList">Press Go button</li>
        <li  className = "helpList">View the Results</li>
        <li  className = "helpList">View all your history urls: Go to the history page and press the method button to view its results again </li>
      </ol>

    </>
  );
}

export default Help;