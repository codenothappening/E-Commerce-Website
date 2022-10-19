import React from 'react'
import styled from 'styled-components'
import {Facebook,Instagram,Twitter,WhatsApp} from '@material-ui/icons'
import { mobile } from '../responsive';
const Container = styled.div`
    display:flex;
    ${mobile({flexDirection:"column"})}

`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
    ${mobile({padding:"0px"})}
`
const Right = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
    justify-content:center;
    align-items:center;
    ${mobile({backgroundColor:"lightgray"})}
`
const Logo = styled.h1`
    ${mobile({display:"none"})}
`
// const Description = styled.p`
//     margin-top:20px;
//     margin-bottom:0px;
// `
const SocialContainer = styled.div`
    display:flex;
`
const SocialIcon = styled.div`
    width:40px;
    height:50px;
    color:black;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right :25px;
`
const Products = styled.div`
    flex:1;
    padding:20px;
`
const Title = styled.h3`
    margin-bottom:30px;
    font-size:25px;
`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`
const ListItem = styled.li`
    width:100%;
    margin-bottom:10px;
    font-size:17px;
    color:gray;
`

const GetHelp = styled.div`
    flex:1;
    padding:20px;
`
const AboutUs = styled.div`
    flex:1;
    padding:20px;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>attHire.</Logo>
            {/* <Description>Wish you had a great time with Atthire</Description> */}
        </Left>

        <Products>
            <Title>PRODUCTS</Title>
            <List>
                <ListItem>New Arrivals</ListItem>
                <ListItem>Best Sellers</ListItem>
                <ListItem>Release Dates</ListItem>
                <ListItem>Sales</ListItem>
            </List>
        </Products>
        <GetHelp>
        <Title>GET HELP</Title>
            <List>
                <ListItem>Order Status</ListItem>
                <ListItem>Shipping & Delivery</ListItem>
                <ListItem>Returns</ListItem>
                <ListItem>Payment Option</ListItem>
                <ListItem>Contact Us</ListItem>
            </List>
        </GetHelp>
        <AboutUs>
        <Title>ABOUT US</Title>
            <List>
                <ListItem>News</ListItem>
                <ListItem>Careers</ListItem>
                <ListItem>Investors</ListItem>
                <ListItem>Purpose</ListItem>
                <ListItem>Sustainability</ListItem>
            </List>
        </AboutUs>
        <Right>
            <SocialContainer>
                <SocialIcon>
                    <Facebook style={{fontSize:60}}/>
                </SocialIcon>
                <SocialIcon>
                    <Instagram style={{fontSize:60}}/>
                </SocialIcon>
                <SocialIcon>
                    <Twitter style={{fontSize:60}}/>
                </SocialIcon>
                <SocialIcon>
                    <WhatsApp style={{fontSize:60}}/>
                </SocialIcon>
            </SocialContainer>
        </Right> 
    </Container>
  )
}

export default Footer