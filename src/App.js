import React, { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'

import './App.css'
import AllProducts from './components/AllProducts'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App () {
  const [state, setstate] = useState([])
  const [currency, setcurrency] = useState('USD')
  const [openSidebar, setopenSidebar] = useState(false)
  const ALL_PRODUCTS = gql`
  query {
    products {
      id
      price(currency: ${currency})
      image_url
      title
    }
  }
  `
  const { data } = useQuery(ALL_PRODUCTS)

  const handleAddProduct = (product) => {
    const current = [...state]
    let newItem = current.find(x => x.id === product.id)
    if (newItem) {
      newItem.amount = newItem.amount + 1
      setstate([...current])
    } else {
      newItem = { ...product, amount: 1 }
      setstate([...current, newItem])
    }
  }

  const handleModifyProductAmount = (productId, increment) => {
    const current = [...state]
    const item = current.find(x => x.id === productId)
    if (increment === true) {
      item.amount = item.amount + 1
      setstate([...current])
    } else {
      item.amount = item.amount - 1
      if (item.amount === 0) {
        setstate([...current].filter(x => x.id !== item.id))
      } else {
        setstate([...current])
      }
    }
  }

  const handleRemoveProduct = (id) => {
    const current = [...state]
    setstate([...current].filter(x => x.id !== id))
  }

  useEffect(() => {
    if (data) {
      const current = [...state]
      current.forEach(item => {
        item.price = data.products.find(x => x.id === item.id).price
      })
      setstate([...current])
    }
  }, [data])
  return (
    <>
      <Header totalItems={state.length} open={() => setopenSidebar(true)}/>
      <AllProducts data={data} addProduct={handleAddProduct} openSidebar={() => setopenSidebar(true)}/>
      <Sidebar items={state} open={openSidebar} close={() => setopenSidebar(false)} modifyAmount={handleModifyProductAmount} removeProduct={handleRemoveProduct} currency={currency} setcurrency={setcurrency}/>
    </>
  )
}

export default App
