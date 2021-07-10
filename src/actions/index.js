export const incCart = (id) =>{
   return {
       type:"INCREMENT",
       payload:id
   }
}

export const decCart = (id) =>{
    return {
        type: "DECREMENT",
        payload:id
    }
}

export const delCart = (id) =>{
    return {
        type: "DELETE_CART",
        payload:id
    }
}


export const resetCart = () =>{
    return {
        type: "RESET_ALL",
    }
}