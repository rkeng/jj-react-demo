import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import './css/JJCompVars.css';

function App() {
  return (
    <div className="App App-theme">
      <header className="container">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="jumbotron">
          <h1 className="display-4">Welcome to <code>jj-components</code> on React!</h1>

          <p className="lead">This is a demo React application that utilizes Team JayJay's web components.</p>
          <hr className="my-4" />
          <div className="row">
            <div className="col-md-3">
              <p className="lead">Input Number Box<br /><code>jj-input-number</code></p>
            </div>
            <div className="col-md-9">
              <jj-input-number value={20} min={0} max={100} step={1}></jj-input-number>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row">
            <div className="col-md-3">
              <p className="lead">Slider<br /><code>jj-slider</code></p>
            </div>
            <div className="col-md-9">
              <jj-slider value={20} min={0} max={100}></jj-slider>
            </div>
          </div>
        </div>
      </header>

      <div>

      </div>

    </div>
  );
}

export default App;
