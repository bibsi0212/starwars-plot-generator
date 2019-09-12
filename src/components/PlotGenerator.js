import React from 'react';
import PlotTemplate from './PlotTemplate';
import PlotSelect from './PlotSelect';
import Error from './Error';
import { getResourcesFromAPI, chooseRandomPlot } from '../helpers';
import { ReactComponent as LoadingSpinner } from '../img/loader.svg';

class PlotGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      activePlot: 0,
      isLoading: true,
      resources: [],
      showPlot: false,
      error: false,
    };

    this.resourceEndpoints = ['planets', 'starships'];
  }

  async componentDidMount() {
    getResourcesFromAPI(this.resourceEndpoints).then((results) => {
      this.setState({
        resources: results,
        isLoading: false,
      });
    }).catch(() => {
      this.setState({
        error: true,
        isLoading: false,
      });
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.stateName]: event.target.value,
    });
  };

  generatePlot = () => {
    this.setState({
      showPlot: true,
      activePlot: chooseRandomPlot(),
    });
  };

  render({
    resources, isLoading, planetsSelected, starshipsSelected, showPlot, activePlot, error,
  } = this.state) {
    if (error) {
      return <Error />;
    }

    return (
      <>
        { isLoading ? <LoadingSpinner /> : ''}

        <div className="plot-generator" hidden={isLoading}>
          <div className="alert alert-info text-center small">
            Choose from the available options and create your own plot!
          </div>

          <div className="plot-inputs">
            {
              resources.map((resource, index) => (
                <PlotSelect resource={resource} key={index} handleChange={this.handleChange} />
              ))
            }
          </div>

          <button type="button" className="main-button font-weight-bold" onClick={this.generatePlot}>
            Generate Plot
            <span role="img" className="ml-2" aria-label="lightbulb-emoji">💡</span>
          </button>

          {
            showPlot
              ? (
                <PlotTemplate
                  activePlot={activePlot}
                  planet={planetsSelected}
                  starship={starshipsSelected}
                />
              )
              : null
            }
        </div>
      </>
    );
  }
}

export default PlotGenerator;
