import React from "react";

import { useSelector, useDispatch } from 'react-redux'
import { darkMode, lightMode } from '../features/modeSlice'


function Def({children}) {
  const dispatch = useDispatch()
  const mode = useSelector((state) => state.mode)

  const toggleMode = () => {
    mode.darkMode ? dispatch(lightMode()) : dispatch(darkMode())
  }
  
  return (
    <div style={{ backgroundColor: mode.color1, color: 'white', padding: 'auto' }} className="App">
        {children}
      <button onClick={toggleMode}>{ mode.darkMode ? 'Light Mode' : 'Dark Mode' }</button>
  
    </div>
  );
}

export default Def;
