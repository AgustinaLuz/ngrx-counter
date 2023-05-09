import { createReducer, on } from "@ngrx/store";
import { Decrementar, Incrementar } from "./contador.actions";


export const contadorFeatureKey = 'contador';

export interface ContadorState {
  valor: number;
}

const intialState: ContadorState = {
  valor: 0,
}


export const contadorReducer = createReducer<ContadorState>(
  intialState,

  // INCREMENTAR
  on(Incrementar, (currentState) => {
    // currentState.valor++;
    return {
      valor: currentState.valor + 1,
    }
  }),

  on(Decrementar, (currentState) => {
    // currentState = currentState - 1;
    return {
      valor: currentState.valor - 1,
    }
  }),
);
