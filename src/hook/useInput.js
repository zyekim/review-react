// custom hook

import {useCallback, useState, useReducer} from 'react'


function reducer(state,action){
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        [action.name] : action.value
      }
    case 'RESET_INPUT':
      return action.initialForm
    default:
    return state;
  }

}

function useInput(initialForm) {
  // const [form, setForm] = useState(initialForm);
  console.log(initialForm);
  const [form, dispatch] = useReducer(reducer, initialForm);

  const onChange = useCallback( e =>{
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    })
    // setForm(form => ({...form, [name]:value}));
  },[])

  // const reset = useCallback(() => setForm(initialForm),[initialForm]);
  const reset = useCallback(() => dispatch({type: 'RESET_INPUT',initialForm}),[initialForm]);

  return [ form, onChange, reset]
}

export default useInput;