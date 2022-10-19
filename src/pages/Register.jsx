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
    width:40%;
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
    flex-wrap:wrap;
`
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
    padding:10px
`
const Agreement = styled.span`
    font-size:12px;
    margin:20px 0px;
`
const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:black;
    color:white;
    cursor:pointer;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder = "First Name"></Input>
                <Input placeholder = "Last Name"></Input>
                <Input placeholder = "Username"></Input>
                <Input placeholder = "Email"></Input>
                <Input placeholder = "Password"></Input>
                <Input placeholder = "Confirm Password"></Input>
                <Agreement>By creating an account, you agree to Atthire's <b>PRIVACY POLICY</b></Agreement>
                <Button>CREATE</Button>
            </Form>
            
        </Wrapper>
    </Container>
  )
}

export default Register
