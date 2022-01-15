
import './App.css';
import Statetut from './useStateTut';
import ReducerTut from './useReducer';
import EffectTut from './useEffect';
import RefTut from './useReference';
import Imper from './ImperativeCall';
import ContextTut from './useContext/useContext';

function App() {

  return (
    <>
      <Statetut/>
      <hr/>
      <ReducerTut/>
      <hr/>
      <EffectTut/>
      <hr/>
      <RefTut/>
      <hr/>
      <Imper/>
      <hr/>
      <ContextTut/>
      <hr/>
    </>
    );
}

export default App;