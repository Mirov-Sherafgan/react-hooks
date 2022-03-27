import React, { useEffect, useState } from 'react'

export const ItemList = ({ getItems }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const newItems = getItems();
        setItems(newItems)
        console.log('ItemList render')
    }, [getItems])
  return (
    <div>{items?.map(el => <ul key={el}><li>{el}</li></ul>)}</div>
  )
}
