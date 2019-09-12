import React from 'react';

function generateRandomTitle() {
  return 'Han Yolo: A Ransom Story';
}

const PlotTemplate = (props) => (
  <div>
    <h2 className="plot-title">{generateRandomTitle()}</h2>
    <p>
      In an effort to betray the resistance, Han Yolo kidnapped Princess Leia and fled to the planet
      <span className="text-highlight">
        {props.planet || ''}
      </span>
      .
    </p>
    <p>
      During the wild pursuit he was chased through an astroid field, which left his
      <span className="text-highlight">
        {props.starship || ''}
      </span>
      heavily damaged. He now demands 4.000.000 Rupiahs ransom in order to return Princess Leia.
    </p>
    <p>
      With his ship damaged and the resistance on his heels, will he make it?
    </p>
  </div>
);

export default PlotTemplate;
