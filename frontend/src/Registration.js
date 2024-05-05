import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration=()=>{
    const [mydata,setMydata]=useState({})
const navigate=useNavigate();
const handlinput=(e)=>{
   let name=e.target.name;
   let value=e.target.value;
   setMydata(values=>({...values,[name]:value}));

}
const handlSubmit=()=>{
let api="http://localhost:8000/userlogin/registration";
axios.post(api,mydata).then((res)=>{
    alert(res.data);
     navigate("/login")
})
}
    return(
        <>
       <div className="registration">
          <div className="registor">
            <h3 style={{display:"flex", justifyContent:"center", color:"rgb(107, 103, 103)"}}>Registration</h3>
          <lable for="username">Enter username:</lable>
          <input type="text"  name="username" onChange={handlinput}/>
          <lable for="mobilenumber"> Mobile Number:</lable>
          <input type="text"  name="mobilenumber" onChange={handlinput}/>
          <lable for="email">Enter email:</lable>
          <input type="email"  name="email" onChange={handlinput}/>
          <lable for="password">Enter password:</lable>
          <input type="password"  name="password" onChange={handlinput}/>
           <button className="datasave" onClick={handlSubmit}>Registor</button>
          </div>
       </div>
        </>
    );
}
export default Registration;