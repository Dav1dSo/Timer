import { ButtonContainer } from "./Button.styled";

const buttonVariants = {
    primary: 'blue',
    secondary: 'red',
    danger: 'red',
    success: 'green'
}

interface ButtonProps {
    variant?: keyof typeof buttonVariants    
}

export function Button({variant = 'primary'}: ButtonProps) {
    return (
        <ButtonContainer variant={variant}>Cadastrar</ButtonContainer>
    )
}