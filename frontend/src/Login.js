import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
  const [mydata,setMydata]=useState({});
  const navigate=useNavigate();
  const handlInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values,[name]:value}));
 
 }
  const handlsubmit=()=>{
let api="http://localhost:8000/userlogin/login";
axios.post(api,mydata).then((res)=>{
 localStorage.setItem("token",res.data.token);
 localStorage.setItem("username",res.data.username);
alert(res.data.massage);
if(res.data.massage==="plz enter valid password")
  {
    navigate("/registration")
  }
 else if(res.data.email=="mb124969@gmail.com")
  {
   navigate("/admin");
  }
  else
    {
     
   navigate("/shop");
     
    }
})
    
  }
    return(
        <>
       <div className="registration">
          <div className="registor" >
            <h3 style={{display:"flex", justifyContent:"center", color:"rgb(107, 103, 103)"}}>Login</h3>
        
          <lable for="email">Enter email:</lable>
          <input type="email"  name="email" onChange={handlInput}/>
          <lable for="password">Enter password:</lable>
          <input type="password"  name="password" onChange={handlInput}/>
           <button  className="datasave" onClick={handlsubmit}>login</button>
          </div>
       </div>
        </>
    );
}
export default Login;