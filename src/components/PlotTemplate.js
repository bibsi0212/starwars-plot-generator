import React from 'react';
import PropTypes from 'prop-types';
import { plots } from '../helpers';

const PlotTemplate = ({ planet, starship, activePlot }) => (
  <div className="plot-container mb-5">
    <h2 className="plot-title mb-3">{plots[activePlot].title}</h2>
    <p>
      {plots[activePlot].description.intro}
      <span className="text-highlight">
        { `${planet}.` || ''}
      </span>
    </p>
    <p>
      {plots[activePlot].description.middle}
      <span className="text-highlight">
        { `${starship}.` || ''}
      </span>
    </p>
    <p>
      {plots[activePlot].description.end}
    </p>
  </div>
);

PlotTemplate.defaultProps = {
  planet: 'no planet selected',
  starship: 'no planet selected',
};

PlotTemplate.propTypes = {
  planet: PropTypes.string,
  starship: PropTypes.string,
  activePlot: PropTypes.number.isRequired,
};

export default PlotTemplate;
