import styled from 'styled-components'

export const BackDrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  top: 0;
  right: 0;
`

export const StyledSidebar = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  background-color: whitesmoke;
  position: fixed;
  top: 0px;
  overflow-y:auto;
  right: 0px;
  width: 40%;
  z-index: 200;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);

  transition: transform 0.3s ease-out;

  ${p =>
    p.open ? 'transform: translateX(0)' : 'transform: translateX(100%);'};
`
