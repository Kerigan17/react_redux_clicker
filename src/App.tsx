import {useAppDispatch, useAppSelector} from './app/hooks';
import {incremented, decremented, reset} from "./featers/counter/counter-slice";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const count = useAppSelector(state => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => {dispatch(decremented())}}>dec</button>
                <button onClick={() => {dispatch(incremented())}}>add</button>
                <button onClick={() => {dispatch(reset())}}>reset</button>

                <p>count is {count}</p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
