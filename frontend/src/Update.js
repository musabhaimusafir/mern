
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Update=()=>{

    const [mydata,setMydata]=useState([]);
   const navigate=useNavigate();
    const loadData=()=>{
        let api="http://localhost:8000/userlogin/getitems";
        axios.get(api).then((res)=>{
           setMydata(res.data);
        })
      }
      useEffect(()=>{
         
          loadData();
      },[])
      const delet=(id)=>{
        let api="http://localhost:8000/userlogin/delpro";
        axios.post(api,{id:id}).then((res)=>{
            alert(res.data);
            loadData();
        })
      }
      const EditData=(id)=>{
        navigate("../edit/"+id)
      }
      const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.productname}</td>
                <td>{key.price}</td>
                <td>{key.protypename}</td>
                <td>
                    <img src={key.image} style={{height:"30px" ,width:"30px"}} alt=""/>
                </td>
                <td><button  onClick={()=>{delet(key._id)}} >Delete</button></td>
                <td><button onClick={()=>{EditData(key._id)}}>Edit</button></td>
            </tr>
            </>
        )
      })
    return(
        <>
        <div className="datashow">
        <table className="tbl">
            <tr >
                <th>productname</th>
                <th>product price</th>
                <th>product type</th>
                <th>image</th>
                <th> Delete</th>
                <th> Edit</th>
            </tr>
            {ans}
         </table>
        </div>
        </>
    );
}
export default Update;