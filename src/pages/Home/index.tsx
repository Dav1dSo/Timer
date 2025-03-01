import { Play } from "phosphor-react";
import { differenceInSeconds } from 'date-fns'
import { HomeContainer, FormContainer, CountDownContainer, Separator, TaskInput, MinutesAmountInput, StartCountDownButton, StopCountDownButton } from "./styles";
import { useForm } from 'react-hook-form' 
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

const validatersFormEschema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmountInput: zod.number().min(5).max(60)
})

interface FormTypesInterface {
    task: string,
    minutesAmountInput: number
}

interface CycleInterface {
    id: string,
    task: string,
    minutesAmount: number,
    startDate: Date,
    interrupted_at?: Date
    fineshedDate?: Date
}

export function HomePage() {

    const [cycles, setCycle] = useState<CycleInterface[]>([])
    const [cycleActiveId, setActiveCycleId] = useState<string | null>(null)
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

    const { register, handleSubmit, watch, reset } = useForm<FormTypesInterface>({
        resolver: zodResolver(validatersFormEschema),
        defaultValues: { 
            minutesAmountInput: 0,
            task: ''
        }
    })

    function handlerFormSubmit(data: FormTypesInterface) {
        const new_cycle: CycleInterface = {
            id: String(new Date().getTime()),
            task: data.task,
            minutesAmount: data.minutesAmountInput,
            startDate: new Date(),
        }

        setCycle((state) => [...state, new_cycle])
        setActiveCycleId(new_cycle.id)
        setAmountSecondsPassed(0)
        reset()
    }

    const activeCycle = cycles.find((cycle) => cycle.id == cycleActiveId)
    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0


    useEffect(() => {
        let interval: number;

        if (activeCycle) {
            interval = setInterval(() => {
                const secondsDiferrence = differenceInSeconds(new Date(), activeCycle.startDate)

                if (secondsDiferrence >= totalSeconds) {
                    setCycle((state) =>
                        state.map((cycle) => {
                            if (cycle.id === cycleActiveId) {
                                return { ...cycle, fineshedDate: new Date() };  
                            } else {
                                return cycle;  
                            }
                        })
                    );
                    setAmountSecondsPassed(totalSeconds)
                    clearInterval(interval)
                }
                else {
                    setAmountSecondsPassed(secondsDiferrence)
                }
            }, 1000)
            
        } 

        return () => {
            clearInterval(interval)
        }

    }, [activeCycle, totalSeconds, cycleActiveId])

    function handlerPausedCycle() {
        setCycle((state) =>
            state.map((cycle) => {
                if (cycle.id === cycleActiveId) {
                    return { ...cycle, interrupted_at: new Date() };  
                } else {
                    return cycle;  
                }
            })
        );
    
        setActiveCycleId(null);  
    }

    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0 

    const minutesAmount = Math.floor(currentSeconds / 60)

    const secondsAmount = currentSeconds % 60

    const minutes = String(minutesAmount).padStart(2, '0')
    const seconds = String(secondsAmount).padStart(2, '0')

    const isDisable = !watch('task')

    useEffect(() => {
        document.title = `${minutes}:${seconds}`
    }, [minutes, seconds, activeCycle])

    console.log(cycles)

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handlerFormSubmit)}>
                <FormContainer>
                    <label htmlFor="task">Nova tarefa:</label>
                    <TaskInput list="task-list-history" placeholder="Descrição" type="text" disabled={!!activeCycle} id="task" {...register('task')}/>

                    <datalist id="task-list-history">
                        <option value="Dar banho no peixe" />
                        <option value="Subi para cima" />
                        <option value="Amaciar a carne" />
                        <option value="Comprar pão" />
                    </datalist>

                    <label htmlFor="minutesAmount">Durante</label>
                    <MinutesAmountInput step={5} min={5} max={60} placeholder="0" type="number" id="minutesAmount" {...register('minutesAmountInput', {valueAsNumber: true})}/>
                    <span>minutos</span>
                </FormContainer>
                <CountDownContainer>
                    <span>{minutes[0]}</span>
                    <span>{minutes[1]}</span>
                    <Separator>:</Separator>
                    <span>{seconds[0]}</span>
                    <span>{seconds[1]}</span>
                </CountDownContainer>
                { activeCycle ? (
                    <StopCountDownButton onClick={handlerPausedCycle} type="submit"> 
                        {/* <Play size={24} />  */} 
                        Pausar
                    </StopCountDownButton>
                ) : (
                    <StartCountDownButton disabled={isDisable} type="submit">
                        {/* <Play size={24} />  */}
                        Iniciar
                    </StartCountDownButton>
                )}
            </form> 
        </HomeContainer>
    )
}