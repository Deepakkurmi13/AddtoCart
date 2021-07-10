import { products } from "../api/productApi";

const initialState = {
     items:products,
     totalItems:0,
     totalAmount:0
}

const AddToCart = (state=initialState ,action) =>{
   switch(action.type){
      case "DELETE_CART":
      const DeleteData = state.items.filter((val) => {
         return  val.id !== action.payload;
      })
 
      return { ...state , items:DeleteData }
       
      case "INCREMENT":
         const incNumber = state.items.map((curVal) => {
            if(curVal.id === action.payload){
               return  {...curVal , quantity:curVal.quantity + 1 };
            }
            return curVal;   
         });
        return { ...state, items:incNumber };

      case "DECREMENT":

         const decNumber = state.items.map((curVal) => {
            if(curVal.id === action.payload){
               if(curVal.quantity > 1){
                  return  {...curVal , quantity:curVal.quantity - 1 };
               }
            }
            return curVal;   
         });

         return { ...state, items:decNumber };

      case "ALL_ITEMS":
         const { totalItems , totalAmount  } = state.items.reduce((accum, value) => {
               const { quantity , price } = value;
               accum.totalItems += quantity;
               accum.totalAmount += price * quantity;
               return accum;
            }, 
            {
               totalItems:0,
               totalAmount:0
            }
         );

         console.log(totalItems);
         return {...state , totalItems , totalAmount };

       case "RESET_ALL":
        
          const Reset = state.items.map((val) =>{
             return {...val , quantity:1 }
          })

          return {...state , items:Reset }

      default:return state;
   }
}

export default AddToCart;