import React,{useState} from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import {addUser,deleteUser,updateUserName} from './Features/user'
import { useDispatch } from 'react-redux'


export default function App() {
      const dispatch =useDispatch();
      const [Name, UpdateName]=useState("");
      const [UserName, UpdateUserName]=useState("");
      const[newUserName, UpdateNewUserName] = useState("");

      const userList =useSelector((state)=>state.user.value)
      return ( 
        <div className="App">
            {""}
        <div className="addUser">
              <input type="text" placeholder='Name...' onChange={(event)=>{UpdateName(event.target.value)}}/>
              <input type="text" placeholder='UserName...'onChange={(event)=>{UpdateUserName(event.target.value)}}/>
              <button onClick={()=>{dispatch(addUser({id: userList[userList.length-1].id+1, name:Name, username:UserName}))}}>Add Users</button>
       </div>
       <div className="displayUsers">{userList.map((user)=>{
             return <div className="Card"  key={user.id}>
                   <h1 >{user.name}</h1>
                   <h1 >{user.username}</h1>
                   <div>
                   <input type="text" placeholder='New UserName...'onChange={(event)=>{UpdateNewUserName(event.target.value)}}/>
                   <button onClick={()=>{dispatch(updateUserName({id:user.id, username:newUserName}))}}>New UserName</button>
                   <button onClick={()=>{dispatch(deleteUser({id:user.id}))}}>Delete</button>
                   </div>
             </div>
       })}</div>
        </div>
      )
}



