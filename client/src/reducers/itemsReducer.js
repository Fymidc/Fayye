

const initialState={  
    items:[],
    cart:[],
    bag:[]
    
}

const itemsReducer =(state=initialState,action)=>{
    
    switch (action.type) {
       
        case "FETCH_ITEMS":
            return {
                ...state,
                
                items:action.payload,
                
            };
        case "ADD_ITEM":
            return {
                ...state,
                cart:[...state.cart, action.payload]
            };

        case "DELETE_ITEM":

             const item=state.cart.findIndex(x=>x.title===action.payload.title)

            return {
                ...state,               
                            
            };

        case "SHOW_ITEM":
            return {
                ...state,
               
                bag:action.payload
                
            };
      
        default:
            return{
                ...state,
                
                
            }
    }
}

export default itemsReducer;