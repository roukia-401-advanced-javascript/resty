import React from 'react';
import './help.scss';
function Help() {

  return (
    <>
      <h2 id = "h2Help">Welcome To Help Page </h2>
      <h3 id = "h3Help">Here are the steps to run the Resty application:</h3>

      <ol class="d">
        <li class = "helpList">Enter url</li>
        <li  class = "helpList"> choose the method</li>
        <li  class = "helpList">Enter the body if required</li>
        <li  class = "helpList">Press Go button</li>
        <li  class = "helpList">View the Results</li>
        <li  class = "helpList">View all your history urls: Go to the history page and press the method button to view its results again </li>
      </ol>

    </>
  );
}

export default Help;