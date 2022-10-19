import React from 'react'
import styled from 'styled-components'
import {Search,ShoppingCartOutlined,ArrowDropDownOutlined ,AccountCircleRounded} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import { mobile } from '../responsive';
const Container = styled.div`
    height:60px;
    
    ${mobile({height:"50px"})}
`;
const Wrapper = styled.div`
    padding : 10px 20px;
    display :flex;
    align-items:center;
    justify-content:space-between;
    ${mobile({padding:"10px 0px"})}
`;
const Left = styled.div`
    flex:0.5;
    display:flex;
    align-item:center;
`;
const Language = styled.span`
    font-size:15px;
    font-family: 'Montserrat', sans-serif;
    cursor:pointer;
    margin-right:15px;
    margin-top:10px;
    color:black;
    align-item:center;
    ${mobile({display:"none"})}
`;
const Logo = styled.h1`
    font-weight:bold;
    ${mobile({fontSize:"20px"})}
`;
const SearchContainer = styled.div`
    border:0.5px solid lightgray;
    display:flex;
    height:20px;
    align-item:center;
    justify-content:center;
    margin-left:25px;
    border-radius:15px;
    padding :5px;
    width:100%;
    
`;
const Input = styled.input`
    border:none;
    outline:none;
    width:100%; 
    ${mobile({width:"50px"})}
`;
const MFH = styled.div`
    display:flex;
    text-align:center;
    padding:0px 2px;
    justify-content:space-between;
    ${mobile({display:"none"})}
`;
const Center = styled.div`
    flex:1;
    text-align:center;
`;

const Right = styled.div`
    flex:1;
    display :flex;
    align-item:center;
    justify-content :flex-end;
    ${mobile({flex:2,justifyContent:"center"})}
`;
const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:15px;
    margin-right:10px;
    ${mobile({fontSize:"12px" , marginLeft:"5px" ,marginRight:"5px"})}
`;
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN
                    <ArrowDropDownOutlined style={{fontSize:20,display:"flex",alignConter:"center",justifyContent:"center"}}/>
                </Language>
                <Logo>
                    attHire.
                </Logo>
            </Left>
            <MFH>
                <button style = {{border:"none",background:"white",fontSize:14,cursor:"pointer",paddingRight:"5px"}}>MALE</button>
                <button style = {{border:"none",background:"white",fontSize:14,cursor:"pointer",padding:"5px"}}>FEMALE</button>
                <button style = {{border:"none",background:"white",fontSize:14,cursor:"pointer",padding:"5px"}}>KIDS</button>
                <button style = {{border:"none",background:"white",fontSize:14,fontWeight:600,cursor:"pointer",padding:"5px"}}>TRENDING</button>
            </MFH>
            <Center>
                <SearchContainer>
                    <Input placeholder='Search'/>
                    <Search style= {{color:"gray",fontSize:20,alignItem:Center}}/>
                </SearchContainer>
            </Center>
            <Right>
                <MenuItem>
                    <AccountCircleRounded/>
                </MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                      <ShoppingCartOutlined/>
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
