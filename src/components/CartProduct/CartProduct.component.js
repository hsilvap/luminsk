/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MONEYFORMATTER } from '../../constants'

const CartProductWrapper = styled.div`
  margin: 2em;
  background-color:white;
  padding: 0px 15px;
  display:flex;
  flex-flow:column;
  > div > img{
    max-width: 100px;
    max-height: 100px;
  }
`

const AmountWrapper = styled.div`
  border: solid 1px grey;
  display: inline-flex;
  > span {
    margin: 1em;
  }
`

const AmountModifierWrapper = styled.span`
  cursor: pointer;
`

const FooterWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 1em;
`

const CartProduct = ({ id, title, amount, price, image_url, modifyAmount, removeProduct }) => {
  return <CartProductWrapper>
    <div onClick={() => removeProduct(id)} style={{ textAlign: 'end', cursor: 'pointer' }}> x </div>
    <div >{title}</div>
    <div style={{ textAlign: 'end' }}><img src={image_url} alt={title}/></div>
    <FooterWrapper>
      <AmountWrapper>
        <AmountModifierWrapper onClick={() => modifyAmount(id, false)}>-</AmountModifierWrapper>
        <span> {amount}</span>
        <AmountModifierWrapper onClick={() => modifyAmount(id, true)}>+</AmountModifierWrapper></AmountWrapper>

      <span> {MONEYFORMATTER.format(amount * price)}</span>
    </FooterWrapper>
  </CartProductWrapper>
}
export default CartProduct

CartProduct.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  image_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  modifyAmount: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired
}
