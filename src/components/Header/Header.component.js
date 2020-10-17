import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import cart from './../../assets/cart.svg'
const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: center;
  min-height: 3em;
  border-top: solid 1px lightgrey;
  border-bottom: solid 1px lightgrey;
`
const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  > div > span {
    margin: 2em;
  }
`

const Header = ({ totalItems, open }) => {
  return (
    <StyledHeader>
      <span style={{ textAlign: 'center' }}>LUMIN</span>
      <StyledButtonsWrapper>
        <div>
          <span>Shop</span>
          <span>Learn</span>
        </div>
        <div>
          <span>Account</span>
          <span style={{ margin: '0px 2em' }}>
            <img
              onClick={open}
              style={{ width: 20, height: 20, fill: 'white' }}
              src={cart}
            >
            </img>
            {totalItems > 0 && <span>{ totalItems }</span>}
          </span>
        </div>
      </StyledButtonsWrapper>
    </StyledHeader>
  )
}

export default Header

Header.propTypes = {
  totalItems: PropTypes.number.isRequired,
  open: PropTypes.func.isRequired
}
