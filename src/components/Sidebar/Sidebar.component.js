import React from 'react'
import PropTypes from 'prop-types'
import { BackDrop, StyledSidebar } from './Sidebar.styled'
import CartProduct from '../CartProduct/CartProduct.component'
import { CURRENCIES } from '../../constants'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  display: flex;
  flex-flow:row;
  min-height: 2em;
  justify-content: center;
    align-items: center;
}
`

const StyledSelect = styled.select`
  margin: 0px 2em;
`
const Sidebar = ({ open, items, close, modifyAmount, removeProduct, setcurrency }) => {
  return <React.Fragment>
    {open && <React.Fragment> <BackDrop />
      <StyledSidebar open={open}>
        <div>
          <HeaderWrapper>
            <div style={{ cursor: 'pointer' }} onClick={close}> {'<'} </div>
            <span style={{ width: '100%', textAlign: 'center' }}>   Your cart </span>

          </HeaderWrapper>
          <StyledSelect>
            {CURRENCIES.map(curr => <option key={curr} value={curr}> {curr}</option>)}
          </StyledSelect>
        </div>
        {items.map(item => <CartProduct key={item.id} {...item} modifyAmount={modifyAmount} removeProduct={removeProduct} />)}
      </StyledSidebar> </React.Fragment>}
  </React.Fragment>
}
export default Sidebar

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  modifyAmount: PropTypes.func.isRequired,
  setcurrency: PropTypes.func.isRequired,
  items: PropTypes.any
}
