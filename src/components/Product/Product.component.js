/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledProduct = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 400px;
  justify-content: center;
  align-items: center;
  > img {
    margin: 2em;
    max-width: 100px;
    max-height: 100px;
  }
  > button {
    background-color: #4b5648;
    color: white;
    padding: 1em;
    margin: 1em;
  }
`

const Product = ({ id, price, image_url, title, addToCart, openSidebar }) => {
  const handleClick = () => {
    addToCart({ id, price, image_url, title })
    openSidebar()
  }
  return (
    <StyledProduct>
      <img src={image_url} alt={title} />
      <label>{title}</label>
      <label>{`From ${price}`}</label>
      <button onClick={handleClick}>Add to Cart</button>
    </StyledProduct>
  )
}

export default Product

Product.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
  openSidebar: PropTypes.func.isRequired
}
