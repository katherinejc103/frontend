import React from 'react'
import ListOutfits from './ListOutfits'


const OutfitCard = ({outfit}) => {

  return (
    <div class="container">

      <li>
      {outfit.top}
      <br></br>
      {outfit.bottom}
      <br></br>
      {outfit.color}
      <br></br>
      </li>
    </div>
  
  )
}

export default OutfitCard;