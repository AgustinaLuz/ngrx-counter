import { ActionReducerMap } from "@ngrx/store";
import { ContadorState, contadorFeatureKey, contadorReducer } from "./contador/contador.reducer";

export interface AppState {
  [contadorFeatureKey]: ContadorState;
}

export const actionReducerMap: ActionReducerMap<AppState> = {
  [contadorFeatureKey]: contadorReducer,
}
