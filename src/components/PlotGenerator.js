import React from 'react';
import { getResourcesFromAPI } from '../helpers';
import PlotTemplate from './PlotTemplate';
import PlotSelect from './PlotSelect';
import { ReactComponent as LoadingSpinner } from '../img/loader.svg';

class PlotGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      resources: [],
      isLoading: true,
    };

    this.resourceEndpoints = ['planets', 'starships'];
  }

  async componentDidMount() {
    getResourcesFromAPI(this.resourceEndpoints).then((results) => {
      this.setState({
        resources: results,
        isLoading: false,
      });
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.dataset.statename]: event.target.value,
    });
  }

  render({
    resources, isLoading, planetsSelected, starshipsSelected,
  } = this.state) {
    return (
      <div className="plot-generator">
        <div className="alert alert-info text-center">
          Choose from the available options and create your own plot!
        </div>

        { isLoading ? <LoadingSpinner /> : ''}

        <div className="plot-inputs" hidden={isLoading}>
          {
            resources.map((resource, index) => (
              <PlotSelect resource={resource} key={index} handleChange={this.handleChange} />
            ))
          }
        </div>

        <div className="plot-container" hidden={isLoading}>
          <PlotTemplate
            planet={planetsSelected}
            starship={starshipsSelected}
          />
        </div>

        <button type="button" className="main-button font-weight-bold" hidden={isLoading}>
          <span role="img" aria-label="angry-emoji">🤬 </span>
          ROLL THE INTRO ALREADY
        </button>

      </div>
    );
  }
}

export default PlotGenerator;
