
import React from 'react'
import FoodBox from './FoodBox';

const FoodList = ({foodList}) => {
  return(
    <div className="foodbox">
      {foodList.map((foods,i) => {
        return <FoodBox {...foods} key = {i} /> 
      })}
    </div>
  )
}

export default FoodList 