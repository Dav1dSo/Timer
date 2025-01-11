import styled from "styled-components";

const buttonVariants = {
    primary: 'blue',
    secondary: 'danger',
    danger: 'red',
    success: 'green'
}   

interface ButtonProps {
    variant?: ButtonProps
}

export const ButtonContainer = styled.button<ButtonProps>`
    width: 100px;
    height: 40px;
    border-radius: 4px;
    border: 0;
    margin: 8px;
    background-color: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme['white']};

    display: flex;
    justify-content: center;    
    align-items: center;
`