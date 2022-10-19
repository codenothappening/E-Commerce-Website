import React from 'react'
import styled from 'styled-components'
//import {useState} from 'react';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import { mobile } from '../responsive';

const LowerContainer = styled.div`
    height:90vh;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    margin:auto;
    ${mobile({height:"70vh"})}
`
const Wrapper = styled.div`
    display :flex;
    align-items:center;
    justify-content:center;
`
const LowerContainerTitle = styled.div`
    height:100px;
    font-size:50px;
    font-weight:600;
    width:50%;
    background-color:transparent;
    position:absolute;
    top:0;
    display:flex;
    align-items:center;
    justify-content:center;
    letter-spacing:2px;
    margin-top:15px;
    ${mobile({fontSize:"15px",height:"20px"})}
`
const Arrow= styled.div`
    width:50px;
    height:50px;
    border-radius:10px;
    background-color:#fff7f7;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    left:${props => props.direction ==="left"&&"10px"};
    right:${props => props.direction ==="right" && "10px"};
    opacity:0.7;
    transition: transform 0.5s ease;
    &:hover{
        transform:${props => props.direction ==="left"&&"translate(-3px,0px)"};
        transform:${props => props.direction ==="right"&&"translate(3px,0px)"};
        opacity:0.5;
        }
    }
    cursor:pointer;

`
const MainSliderContainer = styled.div`
    height:410px;
    width:60%;
    margin-top:-30px;
    // background-color:gray;
    position:relative;
    display:flex;
    align-items:center;
    ${mobile({height:"350px",width:"16.9%"})}
`
const Slider = styled.div`
    width:100%;
    height:100%;
    white-space:nowrap;
    overflow-x:scroll;
    scroll-behavior:smooth;
    scrollbar-width:none;
    ::-webkit-scrollbar{
        display:none;
    }
`
const SliderCard = styled.div`
    width:250px;
    height:400px;
    background:white;
    border-radius:10px;
    display:inline-block;
    margin-left:5px;
    margin-right:5px;
    box-shadow: 2px 2px 2px 2px #0000001f;
    cursor:pointer;
    ${mobile({height:"300px"})}
`
const SliderCardImage = styled.div`
    width:100%;
    height:300px;
    background-color:#f1f1f1;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    ${mobile({height:"250px"})}
`
const SliderCardTitle = styled.p`
    font-weight: 500;
    margin-top:10px;
    font-family: 'Barlow', sans-serif;
`
const SliderCardDescription =  styled.p`
    opacity: 0.5;
    font-size:13px;
    font-family: 'Barlow', sans-serif;
`
const LowerContent = (props) => {
    //const slides = [1,2,3,4,5,6,7,8];
    const slideLeft = ()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 300;
    }
    const slideRight = ()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 300;
    }
  return (
    <LowerContainer>
        <Wrapper>
            <LowerContainerTitle><p>WHAT'S TRENDING</p></LowerContainerTitle>
                <MainSliderContainer>
                    <Arrow direction = "left" onClick = {slideLeft}>
                        <ArrowBackIosOutlined />
                    </Arrow>
                    <Slider id = "slider">
                    {
                        props.slides.map((slide,index)=>{
                            return(
                                <SliderCard key ={index} onClick ={()=>slide.clickEvent()}>
                                    <SliderCardImage style={{backgroundImage:`url(${slide.image})`,backgroundSize:'cover'}}></SliderCardImage>
                                    <SliderCardTitle>{slide.title}</SliderCardTitle>
                                    <SliderCardDescription>{slide.description}</SliderCardDescription>
                                </SliderCard>
                            )
                        })
                    }
                    </Slider>
                    <Arrow direction = "right" onClick = {slideRight}>
                        <ArrowForwardIosOutlined />
                    </Arrow>
                </MainSliderContainer> 
        </Wrapper>
    </LowerContainer>
    
  )
}
export default LowerContent
