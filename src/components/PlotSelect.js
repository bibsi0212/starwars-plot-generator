import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { capitalizeFirstLetter } from '../helpers';

const PlotSelect = ({ resource, handleChange }) => {
  const selectOptions = resource.data.map((item) => ({
    value: item.name,
    label: item.name,
  }));

  return (
    <div className="form-group">
      <label htmlFor={`select-${resource.name}`}>{capitalizeFirstLetter(resource.name)}</label>
      <Select
        className="plot-select"
        options={selectOptions}
        id={`select-${resource.name}`}
        onChange={(val) => { handleChange({ target: { stateName: `${resource.name}Selected`, value: val.value } }); }}
      />
    </div>
  );
};

PlotSelect.propTypes = {
  resource: PropTypes.shape({
    name: PropTypes.string,
    data: PropTypes.array,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default PlotSelect;
