import { styled } from "styled-components";



export const Form = styled.form`
    width: 40%;
    margin: auto;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border-radius: 12px;
    background-color: #fff;

    a{
        color: ${({theme}) => theme.colors.brand.accent}
    }

    h2{
        color: ${({theme}) => theme.colors.gray.dark};
        font-weight: bold;
    ;}

    @media (max-width: 768px){
        width: 60%;

        h2{
            font-size: ${({theme}) => theme.typography['md']};
        }
    }

    @media (max-width: 425px) {
        width: 80%;
    }
`