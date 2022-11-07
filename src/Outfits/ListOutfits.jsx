import React from 'react'
import OutfitCard from './OutfitCard'

const ListOutfits = ({ outfits }) => {

  const outfitCards = outfits.map(outfit => <OutfitCard key={outfit.id} season={outfits.season} outfit={outfit}/>)
  // const filteredOutfits= outfitCards.filter(checkSeason);


  return (
    <div>
      <h1>
        Closet Inventory
       </h1>
       {outfitCards}

    </div>
  )
}

export default ListOutfits