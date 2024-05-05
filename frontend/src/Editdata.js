
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Editdata=()=>{

const [mydata,setMydata]=useState({});

    const {id}=useParams();
  const navigate=useNavigate();
    const loadData=()=>{
        let api="http://localhost:8000/userlogin/editfind";
        axios.post(api,{id:id}).then((res)=>{
            setMydata(res.data);
        })
    }
    useEffect( ()=>{
        loadData();
    },[]);

    const handlinput=(e)=>{
     let name=e.target.name;
     let value=e.target.value;
     setMydata(values=>({...values,[name]:value}));
    }
    const handlSubmit=()=>{
        let api="http://localhost:8000/userlogin/update";
    axios.post(api,{id:id,productname:mydata.productname,price:mydata.price,protypename:mydata.protypename}).then((res)=>{
        alert(res.data);
        navigate("../update");
    })
    }
    return(
        <>
           <div className="registration">
          <div className="registor">
            <h3 style={{display:"flex", justifyContent:"center", color:"rgb(107, 103, 103)"}}>Insert Data</h3>
          <lable for="username">Enter productname:</lable>
          <input type="text"  name="productname" value={mydata.productname} onChange={handlinput}/>
          <lable for="mobilenumber"> product price:</lable>
          <input type="text"  name="price" value={mydata.price} onChange={handlinput}/>
          <lable for="email">Enter product type:</lable>
          <input type="email"  name="protypename" value={mydata.protypename} onChange={handlinput}/>
         
           <button className="datasave" onClick={handlSubmit} >Save</button>
          </div>
       </div>
        </>
    );
}
export default Editdata;