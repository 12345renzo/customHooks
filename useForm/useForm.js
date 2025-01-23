import { useState } from "react";

export function useForm( inicial ) {
  const [state, setState] = useState(inicial);

  const cambio = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const resetear = () => {
    setState(inicial);
  };

  return {
    state,
    cambio,
    resetear
  };
}
