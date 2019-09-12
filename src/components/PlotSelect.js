import React from 'react';
import PropTypes from 'prop-types';
import { capitalizeFirstLetter } from '../helpers';

const PlotSelect = ({ resource, handleChange }) => (
  <div className="form-group">
    <label htmlFor={`select-${resource.name}`}>{capitalizeFirstLetter(resource.name)}</label>
    <select
      defaultValue={resource.name}
      className="form-control"
      id={`select-${resource.name}`}
      key={resource.name}
      onChange={handleChange}
      data-statename={`${resource.name}Selected`}
    >
      {resource.data.map((item) => <option value={item.name} key={item.name}>{item.name}</option>)}
    </select>
  </div>
);

PlotSelect.propTypes = {
  resource: PropTypes.shape({
    name: PropTypes.string,
    data: PropTypes.array,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default PlotSelect;
