import { styled } from "styled-components";



export const Form = styled.form`
    width: 60%;
    margin: auto;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border-radius: 12px;

    h2{
        text-align: center;
        color: ${({theme}) => theme.colors.gray.dark}
    }
`