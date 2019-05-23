import React from 'react'
import FoodBox from './FoodBox';

const FoodList = (props) => {
  const list = props.foods.map((food, i) => (
    <div className="col-4 mb-4" key={i}>
      <FoodBox food={food} />
    </div>
  ))

  return (
    <div className="EpisodesList">
      <h2>All foods</h2>

      <div className="row">
        {list}        
      </div>
    </div>
  );
}

export default FoodList