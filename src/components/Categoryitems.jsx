import React from 'react'
import styled from "styled-components"

import { mobile } from '../responsive';
const Container =  styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position:relative;
    border-radius:20px;
    cursor:pointer;
    
    &:hover{
        transform:${props => "translate(0px,10px)"};
        transition:transform 1s ease;
        opacity:0.9;
        box-shadow: 3px 3px 3px 3px #0000001f;
        }
`
const Image =  styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    border-radius:20px;
    ${mobile({height:"30vh"})}
`
const Info =  styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const Title =  styled.h1`
    color:white;
    margin-bottom:20px;
    
`
const Button =  styled.button`
    border:none;
    padding :10px;
    background-color:black;
    color:white;
    cursor:pointer;
    font-weight:600;
    border-radius:10px;
    &:hover{
        transform:translate(3px,0px);
        opacity:0.7;
        transition:transform 1s ease;
    ;
`


const Categoryitems = ({item}) => {
  return (
    <Container>
        <Image src = {item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default Categoryitems