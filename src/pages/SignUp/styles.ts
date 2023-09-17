import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  min-height: 100vh;
  padding: 0 40px;
`

export const ContentContainer = styled.div`
  background-color: white;
  max-width: var(--max-width);
  box-shadow: 0px 0px 9px 9px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 400px;
  padding: 20px;
  @media (max-width: 800px) {
    width: 100%;
  }
`

export const Form = styled.form`
  position: relative;
`

export const Logo = styled.img`
  height: 100px;
  position: absolute;
  top: -75px;
  right: 20px;
  float: right;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: unset;
`

export const Col = styled.div`
  width: 100%;
  margin: 0 5px;
`

export const FormLabel = styled.label`
  position: relative;
  font-size: 24px;
  font-weight: 600;
  color: black;
  display: inline-block;
  vertical-align: bottom;
  margin-bottom: 20px;
  font-family: 'Roboto-Regular';
`

export const UsersListContainer = styled.div`
  background-color: white;
  margin-top: 50px;
`

export const Table = styled.table`
  font-family: 'Roboto-Regular';
  width: 100%;
  th,
  td {
    border: 0.1px solid black;
    min-width: 100px;
  }

  thead > tr {
    position: relative;
    display: block;
  }

  tbody {
    display: block;
    height: 145px;
    overflow: auto;
    tr:nth-child(even) {
      background-color: #ccc;
    }
    tr:first-child {
      position: sticky;
      top: 0;
      background-color: red;
    }
  }
`
