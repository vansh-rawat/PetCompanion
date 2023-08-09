import { combineReducers } from "@reduxjs/toolkit";
import categoriesReducer from "./categories";
import petsReducer from "./pets";
import adoptionReducer from "./adoptions";
import snackbarReducer from "./snackbar";

const rootReducer = combineReducers({
    pets: petsReducer,
    categories: categoriesReducer,
    adoptions: adoptionReducer,
    snackbar: snackbarReducer,
});

export default rootReducer;