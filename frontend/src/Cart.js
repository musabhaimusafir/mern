
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItems } from "./productSlice";
import { useNavigate } from "react-router-dom";
const Cart=()=>{

    
    const cartItems=useSelector(state=>state.shop.fltitems);
    const totalprice=useSelector(state=>state.shop.totalAmount);
    const navigate=useNavigate();
   const dispatch=useDispatch();

 
    const remitem=(id)=>{
      dispatch(removeItems(id));
    }
  const handlCheckout=()=>{
   
    navigate("../payment")
  }
    const ans=cartItems.map((key)=>{
        return(
            <>         
           <tr>
            <td>
                <img src={key.image} height="80px" />
            </td>
            <td>{key.productname}</td>
            <td>${key.price}</td>
            <td>
                                                                   
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>

                </select>
               
         </td>
         <td>
            <a href="" style={{textDecoration:"none",fontSize:'20px',color:"purple"}} onClick={()=>{remitem(key.id)}}>remove</a>
         </td>

           </tr>
 
      
            </>
        )
    })

    return(
        <>
       <div className="cartnav">      
      <table className="cartnav1">

        <tr className="bordertop">
            <th></th>
            <th>product name</th>
            <th>product price</th>
            <th>Quantity  </th>
            <th>remove items</th>      
        </tr>                             
      
        {ans}
      </table>
      <div className="totalAmountShow">
             <h3>TotalAmount:</h3><div className="totleamt">${totalprice}</div>
      </div>
      <div className="totalAmountShow">
             <button className="totleamt1" onClick={handlCheckout}>Checkout</button>
      </div>
       </div>
        </>
    );
}
export default Cart;