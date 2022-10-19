import React from 'react'
import styled from "styled-components"
import { categories } from '../data'
import Categoryitems from './Categoryitems'
import { mobile } from '../responsive';
const Container = styled.div`
    display:flex;
    padding :20px;
    justify-content:space-between;
    ${mobile({padidng:"0px",flexDirection:"column"})}
`
const Categories = () => {
  return (
    <Container>
        {categories.map(item =>(
            <Categoryitems item = {item} key = {item.id}/>
        ))}
    </Container>
  )
}

export default Categories