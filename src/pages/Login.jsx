import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    width:100vw;
    height:100vh;
    background-color:#f1f1f1;
    display:flex;
    align-items:center;
    justify-content:center;
`
const Wrapper = styled.div`
    width:30%;
    padding:20px;
    background-color:white;
    ${mobile({width:"75%"})}
`
const Title = styled.h1`
    font-size:24px;
    font-weight:300;
`
const Form = styled.form`
    display:flex;
    flex-direction:column;
`
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:10px 0px;
    padding:10px
`

const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:black;
    color:white;
    cursor:pointer;
    margin-bottom:10px;
`

const Link = styled.a`
    margin:5px 0px;
    font-size:12;
    color:gray;
`
const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder = "Username or Email"></Input>
                <Input placeholder = "Password"></Input>
                <Button>LOG IN</Button>
                <Link style = {{cursor:'pointer'}}>Forgotten your Password?</Link>
                <Link>Not a Member? <u style = {{color:'black',cursor:'pointer'}}>Join Us.</u></Link>
            </Form>
            
        </Wrapper>
    </Container>
  )
}

export default Login
