import React from 'react';
import { Link } from 'react-router-dom';

const StarshipPage = (props) => {
  const starship = props.getStarship(props.match.params.id);
  return (
      <div>
          <div>name:</div>
          <div>{starship.name}</div>
          <div>model:</div>
          <div>{starship.model}</div>
          <Link to='/'>Back</Link>
        </div>
  );
};

export default StarshipPage;