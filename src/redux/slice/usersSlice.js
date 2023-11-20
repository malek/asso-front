import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    id: null,
    nom: "",
    prenom: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setActiveUser: (state, Action) => {
            state.id = Action.payload.id;
            state.nom = Action.payload.nom;
            state.prenom = Action.payload.prenom;
        },
    }

})

export const dispatchLogin = (obj) => (dispatch) => {
    axios.post('url',obj).then((res) => {
        dispatch(setActiveUser(res.data))
    })
}

export const selectConnectedUser = (state) => {
    return state.user;
}

export const {
    setActiveUser
} = userSlice.actions;

export default userSlice.reducer;
