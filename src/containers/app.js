import React, { Component } from 'react';
import Header from '../views/header';
import ContentRouter from '../components/content-router';
import "../resources/css/app.css";

class App extends Component {

  render() {
    return (
        <div className={"full-width"}>
          <div className="header"><Header /></div>
          <div className="full-width">
            <div className="content">
              <ContentRouter />
            </div>
          </div>
        </div>
    );
  }
}
export default App;