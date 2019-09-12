import React from 'react';
import './scss/base.scss';
import Header from './components/Header';
import PlotGenerator from './components/PlotGenerator';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isDarkSide: false,
    };
  }

  toggleDarkSide = ({ isDarkSide } = this.state) => {
    this.setState({
      isDarkSide: !isDarkSide,
    });
  }

  render({ isDarkSide } = this.state) {
    return (
      <div className={`wrapper-outer ${isDarkSide ? 'dark-side' : ''}`}>
        <div className="wrapper-inner container col-12 col-sm-10 col-md-8 col-lg-6 text-center">
          <Header toggleDarkSide={this.toggleDarkSide} isDarkSide={isDarkSide} />
          <PlotGenerator />
        </div>
      </div>
    );
  }
}

export default App;
