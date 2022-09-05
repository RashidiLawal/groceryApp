import React from 'react'
import LineItem from './LineItem';

const itemList = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
        {items.map((item, itemIndex) => 
            
            <LineItem key={`item_${itemIndex}`} item={item} itemIndex={itemIndex} handleCheck={handleCheck}  handleDelete={handleDelete}/>
        )}
  </ul>
    
  )
}

export default itemList