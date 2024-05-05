
import { useSelector } from "react-redux";
import { MdOutlineEmail } from "react-icons/md";
const Payment=()=>{
    const totalprice=useSelector(state=>state.shop.totalAmount);


    const handlpay=()=>{
        alert("your payment succefully done!!")
    }
    return(
        <>
        <div className="paymentSys">
           <div className="pay11">
           <div className="totalAmountShow2">
             <h2>TotalAmount:</h2>
             <div className="totleamt2">$
            {totalprice}.00</div>

      </div>
      <div className="bestseller0">
        Latin words, combined with a handful of model sentence structures, to generate Lorem 
       Ipsum which looks reasonable.
        </div>
           </div>
           <div className="pay22">
            <h4>Pay with card</h4>
            <label>Contect information</label>
            <div className="emaillabel"><span style={{marginLeft:"5px", fontSize:"20px"}}><MdOutlineEmail /></span>
            <input type="email" placeholder="email@example.com" className="inputpayment"/>
            </div>
            <div className="emaillabel">+91
            <input type="number" placeholder="9616000016" className="inputpayment"/>
            </div>
            <br/>
            <label>Card information</label>
            <div className="emaillabel">
            <input type="text" placeholder="1234 1254 6534 9999" className="inputpayment"/>
            <img src="../Images/card3.jpg" height="20px"/>
            <img src="../Images/card1.jpg" height="20px"/>
            <img src="../Images/card4.jpg" height="20px"/>

            </div>
            <div className="emaillabel1">
           <div className="emaillabel2">
           <input type="date" className="inputpayment"/>
           </div>
           <div className="emaillabel3">
           <input type="text" placeholder="CVC" className="inputpayment"/>
           </div>
            </div>
            <br/>
            <label>Name on card</label>
            <div className="emaillabel">
            <input type="text" className="inputpayment"/>
            </div>
            <br/>
            <label>Country</label>
            <div className="emaillabel">
            <select className="inputpayment">
                <option>India</option>
                <option>UK</option>
                <option>USA</option>
                <option>South afrika</option>
                <option>japan</option>
                <option>rasiya</option>
                <option>nepal</option>
                <option>shree lanka</option>
                <option>Bangladesh</option>

            </select>
            </div>
            <br/>
            <button className="emaillabellast" onClick={handlpay}>
                        pay
           </button>
           </div>
        </div>
        </>
    )
}
export default Payment;