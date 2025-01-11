import { Play } from "phosphor-react";
import { HomeContainer, FormContainer, CountDownContainer, Separator, TaskInput, MinutesAmountInput } from "./styles";

export function HomePage() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Nova tarefa:</label>
                    <TaskInput list="task-list-history" placeholder="Descrição" type="text" id="task" />

                    <datalist id="task-list-history">
                        <option value="Dar banho no peixe" />
                        <option value="Subi para cima" />
                        <option value="Amaciar a carne" />
                        <option value="Comprar pão" />
                    </datalist>

                    <label htmlFor="minutesAmount">Durante</label>
                    <MinutesAmountInput step={5} min={5} max={60} placeholder="0" type="number" id="minutesAmount" />
                    <span>minutos</span>
                </FormContainer>
                <CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>
                <button type="submit">
                    <Play size={24} />
                    Iniciar
                </button>
            </form>
        </HomeContainer>
    )

}