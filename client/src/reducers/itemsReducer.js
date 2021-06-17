

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
            return {
                ...state,               
                bag:state.bag.filter(bags => bags._id !== action.payload)
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