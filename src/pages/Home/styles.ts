import styled from "styled-components"

export const Wrap = styled.div`
 
 display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: 0 auto;
    height: 100%;
`

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }

    button[type="submit"] {
        height: 58px;
        border: 0;
        background: ${(props) => props.theme['green-500']};
        color: ${(props) => props.theme['white']};
        font-weight: bold;
        padding: 0 1.25rem;
        border-radius: 8px;
        cursor: pointer;

        &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }

        &:not(:disabled):hover {
            background: ${(props) => props.theme['green-700']};
        }
    }

`    

export const BaseInput = styled.input`
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme['gray-500']};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${(props) => props.theme['gray-100']};

    &:focus {
        box-shadow: none;
        border-color: ${(props) => props.theme['green-500']};
    }

    &::placeholder {
        color: ${(props) => props.theme['gray-500']};
    }
`

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-100']};
    gap: 0.5rem;
`                                                                            

export const TaskInput = styled(BaseInput)`
    flex: 1;
`

export const MinutesAmountInput = styled(BaseInput)`
    width: 4rem;
`

export const CountDownContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;    
    line-height: 8rem;
    color: ${(props) => props.theme['gray-100']};

    display: flex;
    gap: 1rem;

    span {        
        background: ${(props) => props.theme['gray-700']};
        padding: 2rem 1rem;
        border-radius: 8px;
    }
`                                       
export const Separator = styled.div`
    padding: 2rem 0;
    color: ${(props) => props.theme['green-500']};

    width: 4rem;    
    overflow: hidden;
    display: flex;    
    justify-content: center;
`
