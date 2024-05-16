
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Log from './log';


function App() {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Log />}/>
                <Route path='/Home' element={ <Home />}/>
            </Routes>
        </div>
    )  
}

export default App;