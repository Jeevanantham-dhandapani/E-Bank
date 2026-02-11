import Styled from 'styled-components'

export const Background = Styled.div`
    background-color: #152850;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0px;
`

export const CardContainer = Styled.div`
    width: 80%;
    height: 600px;
    background-color: #e0eefe;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 15px;
    justify-content: space-between;
    margin-left: 0px;
`
export const LoginImage = Styled.img`
    width: 60%;
    margin: 30px;
`
export const LoginCard = Styled.div`
    width: 40%;
    background-color: #ffffff;
    border-radius: 15px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    height: 600px;
`
export const Heading = Styled.h1`
    color: #183b56;
    font-family: 'Roboto';
    text-transform: capitalize;
`
export const LoginForm = Styled.form`
    width: 100%;
`
export const InputContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-center;
    gap: 10px;
    margin-bottom: 30px;
`
export const Label = Styled.label`
    font-family: 'Roboto';
    color: #5a7184;
    font-weight: bold;
`
export const Input = Styled.input`
    font-family: 'Roboto';
    color: #5a7184;
    padding: 10px;
    border: 1px solid #c3cad9;
    border-radius: 6px;
    width: 100%;
    height: 40px;
    font-size: 16px;
`
export const LoginButton = Styled.button`
    background-color: #1565d8;
    padding: 10px;
    width: 100%;
    height: 40px;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    outline: none;
    cursor: pointer;
`
export const ErrMsg = Styled.p`
    font-family: 'Roboto';
    color: #ff0b37;
    font-size: 14px;
`
