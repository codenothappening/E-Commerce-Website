import React from 'react'
import styled from 'styled-components'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import {useState} from 'react';
import { sliderItems } from '../data';
import { mobile } from '../responsive';
const Container = styled.div`
    width :100%;
    height:85vh;
    display:flex;
    background-color:#F5f5f5;
    overflow:hidden;
    ${mobile({display:"none"})}
`;
const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7;
    border-radius:50%;
    display :flex;
    align-items:center;
    justify-content :center;
    position:absolute;
    top:0;
    bottom:0;
    left:${props => props.direction ==="left"&&"10px"};
    right:${props => props.direction ==="right" && "10px"};
    margin:auto;
    cursor:pointer;
    opacity:0.7;
    transition:transform 0.5s ease;
    z-index:2;
    &:hover{
    transform:${props => props.direction ==="left"&&"translate(-3px,0px)"};
    transform:${props => props.direction ==="right"&&"translate(3px,0px)"};
    opacity:0.5;
    }
`;
const Wrapper= styled.div`
        height : 100%;
        display:flex;
        transition : all 1.5s ease;
        transform:translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
        width:100vw;
        height:100vh;
        display:flex;
        align-item:center;
`;

const ImageContainer = styled.div`
        height:100%;
        flex:1;
`;

const Image = styled.img`
        height:80%;
`;
const InfoContainer = styled.div`
        flex:1;
        padding:50px;
`;
const Title = styled.h1`
        font-size:50px;
        font-family: 'Montserrat', sans-serif;
`;
const Desc = styled.p`
        margin:50px 0px;
        font-size:20px;
        font-weight:500;
        letter-spacing:2px;
        opacity:0.7;
`;
const Button = styled.button`
        padding:10px 10px;
        font-size:12px;
        color:white;
        background-color:black;
        border:none;
        border-radius:12px;
        cursor:pointer;
        letter-spacing:2px;
        transition:transform 0.5s ease;
        &:hover{
            transform:translate(3px,0px);
            opacity:0.7;
        `;
const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1:2);
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1:0);
        }
    };
  return (
    <Container>
        <Arrow direction = "left" onClick = {()=>handleClick("left")}>
            <ArrowBackIosOutlined/> 
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>
            {sliderItems.map(item =>(
                <Slide bg = {item.bg} key = {item.id}>
                <ImageContainer>
                    <Image src ={item.img} />
                </ImageContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
                </Slide>
            ) )}
        </Wrapper>
        <Arrow direction = "right" onClick = {()=>handleClick("right")}>
            <ArrowForwardIosOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider