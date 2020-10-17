import React from 'react'
import PropTypes from 'prop-types'
import { BackDrop, StyledSidebar } from './Sidebar.styled'
import CartProduct from '../CartProduct/CartProduct.component'
import { CURRENCIES, MONEYFORMATTER } from '../../constants'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  display: flex;
  flex-flow:row;
  min-height: 2em;
  justify-content: center;
    align-items: center;
}
`

const StyledFooter = styled.footer`

  display: flex;
  flex-flow: column;
  padding: 1em;
  >div{
    display: flex;
    align-items:center;
    justify-content: space-around;
    border-top: solid 1px grey;
    padding: 1em;
  }
  > button{
    padding: 1em;
    margin: 10px 0px;
  }
`

const StyledSelect = styled.select`
  margin: 0px 2em;
`
const Sidebar = ({ open, items, close, modifyAmount, removeProduct, setcurrency, currency }) => {
  const total = items.reduce(
    (prevValue, currentValue) => prevValue + currentValue.amount * currentValue.price,
    0
  )

  const handleOnChange = (e) => {
    setcurrency(e.target.value)
  }
  return <React.Fragment>
    {open && <React.Fragment> <BackDrop />
      <StyledSidebar open={open}>
        <header>
          <HeaderWrapper>
            <div style={{ cursor: 'pointer' }} onClick={close}> {'<'} </div>
            <span style={{ width: '100%', textAlign: 'center' }}>   Your cart </span>

          </HeaderWrapper>
          <StyledSelect value={currency} onChange={handleOnChange}>
            {CURRENCIES.map(curr => <option key={curr} value={curr}> {curr}</option>)}
          </StyledSelect>
        </header>
        <div>
          {items.map(item => <CartProduct key={item.id} {...item} modifyAmount={modifyAmount} removeProduct={removeProduct} />)}
        </div>
        <StyledFooter>
          <hr/>
          <div>
            <span> Subtotal </span>
            <span> {MONEYFORMATTER.format(total) } </span>
          </div>
          <button style={{ backgroundColor: 'white' }}>Make this a subscription (save 20%)</button>
          <button style={{ color: 'white', backgroundColor: '#4b5648' }}>Proceed to checkout</button>
        </StyledFooter>
      </StyledSidebar> </React.Fragment>}
  </React.Fragment>
}
export default Sidebar

Sidebar.propTypes = {
  currency: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  modifyAmount: PropTypes.func.isRequired,
  setcurrency: PropTypes.func.isRequired,
  items: PropTypes.any
}
