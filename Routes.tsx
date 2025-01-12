import { Route, Routes } from 'react-router-dom'
import { History } from './src/pages/History/History'
import { Defaultlayout } from './src/layouts/intex'
import { HomePage } from './src/pages/Home'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <Defaultlayout /> }>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/history" element={ <History /> } />
            </Route>
        </Routes>
    )
}