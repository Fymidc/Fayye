

const initialState={
    item:[]  
}

const itemsReducer =(state=initialState,action)=>{
    
    switch (action.type) {
        case "FETCH_ITEMS":
            return {
                ...state,
                item:action.payload,
                
            };
       
        default:
            return{
                state,
            }
    }
}

export default itemsReducer;