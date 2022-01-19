import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../Data/Data";
const user = createSlice({
    name:"users",
    initialState:{value:UserData},
    reducers:{
     addUser:(state,action)=>{
         state.value.push(action.payload)
     },
     deleteUser: (state,action)=>{
        state.value = state.value.filter((user)=>{return user.id !== action.payload.id})
     },
     updateUserName : (state,action)=>{
        state.value.map((user)=>{
            if(user.id === action.payload.id){
                user.username = action.payload.username;
            }
        })

     } 
    }
})

export const {addUser,deleteUser,updateUserName} = user.actions;
export default user.reducer;