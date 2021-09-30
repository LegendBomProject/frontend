import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCount } from './redux/actions';
import { DECREMENT_COUNT, INCREMENT_COUNT } from './redux/action-type';


function App() {
  const dispatch = useDispatch();
  const increment = () => {
    // incrementCount()
     dispatch(incrementCount())
  }

  const decrement=()=>{
    dispatch({type:DECREMENT_COUNT})
  }

  const count = useSelector(content=>content.count)
  console.log('hello',count)
  return (
    <div>
       <button onClick={increment}>+</button>{count}<button onClick={decrement}>-</button>
     
    </div>

  
  );
}

export default App;
