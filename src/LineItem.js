import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa';


const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className="item">

        <input
            type="checkbox" 
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
        />
            <label 
            style = {(item.checked) ? {textDecoration:'line-through'} : null}
            onDoubleClick={() => handleCheck(item.id)}
            >
                {item.item}
            </label>

            <FaRegTrashAlt 
            onClick={() => handleDelete(item.id)}
            role="button"  
            tabIndex={0}
            aria-label={`Delete ${item.item}`}
            />

    </li>
  )
}

export default LineItem