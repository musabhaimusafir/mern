import { createSlice } from "@reduxjs/toolkit";

const shopSlice=createSlice({

    name:'shop',

    initialState:
    {
        items:[],
        fltitems:[],
       totalAmount:0
    }
    ,
    reducers:{
      addItems:(state,action)=>{        
        state.items.push(action.payload);
       state.fltitems=state.items.filter((val,index)=>{return index ===state.items.findIndex(o=>val.id===o.id)});
      
         for(var i=0;i<state.fltitems.length;i++)
          {
            if(state.fltitems[i].price===action.payload.price)
              {
                state.totalAmount=state.totalAmount+state.fltitems[i].price;
              }
          }
      
      
      },
      removeItems:(state,action)=>{

        for(var i=0;i<state.fltitems.length;i++)
          {
            if(state.fltitems[i].id===action.payload)
              {
                state.totalAmount=state.totalAmount-state.fltitems[i].price;
              }
          }
       state.items=state.items.filter(key=>key.id!==action.payload);
       state.fltitems=state.items.filter((val,index)=>{return index ===state.items.findIndex(o=>val.id===o.id)});
     
      
    
      },

    
    }
});
export const {addItems,removeItems,increase,decrease}=shopSlice.actions;
export default shopSlice.reducer;