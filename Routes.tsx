import { Route, Routes } from 'react-router-dom'
import { Home } from './src/pages/Home'
import { History } from './src/pages/History'
import { Defaultlayout } from './src/layouts/intex'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <Defaultlayout /> }>
                <Route path="/" element={ <Home /> } />
                <Route path="/history" element={ <History /> } />
            </Route>
        </Routes>
    )
}