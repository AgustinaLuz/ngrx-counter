import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ContadorState, contadorFeatureKey } from "./contador.reducer";


export const selectContadorState = createFeatureSelector<ContadorState>(contadorFeatureKey);

export const selectContadorValor = createSelector(
  selectContadorState,
  (state) => state.valor
);
