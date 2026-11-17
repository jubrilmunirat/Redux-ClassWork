
import './Counter.css'
import { useSelector, useDispatch } from 'react-redux'
const Counter = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();


    function handleIncrement() {
        dispatch({ type: 'increment' })
    }
    function handleDecrement() {
        dispatch({ type: 'decrement' })
    }
    function handleIncreaseby5() {
        dispatch({ type: 'Increase by 5' })
    }
    return (
        <div className='counter'>
            <h2> Counter</h2>
            <p> Count: {count} </p>
            <div className='counter-controls'>

                <button onClick={handleIncrement} className='btn btn-primary'> increment</button>
                <button onClick={handleDecrement} className='btn btn-secondary'> decrement </button>
                <button onClick={handleIncreaseby5} className='btn btn-increase'> Increase by 5</button>
            </div>
        </div >
    )
}

export default Counter