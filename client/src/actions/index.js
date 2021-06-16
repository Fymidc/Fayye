
import axios from 'axios';


export const fetchUser = ()=> async dispatch=>{
    
    const res = await axios.get('/api/current_user')
    
     dispatch({
         type:"FETCH_USER",
         payload:res.data
     })
    
}

export const handleToken = (token)=> async dispatch=>{
    
    const res = await axios.post('/api/stripe',token)
    
     dispatch({
         type:"FETCH_USER",
         payload:res.data
     })
    
}

export const fetchItems = ()=>dispatch=>{
    dispatch ({type:"FETCH_ITEMS_START"})
    axios.get('/api/items')
    .then(res=>dispatch({
        type:"FETCH_ITEMS",
        payload:res.data
    }))
    .catch(error=>dispatch({type:"FETCH_ITEMS_ERROR",payload:error}))

     
    
}


export const addItem =(item)=>async dispatch=>{
    await axios.post('/api/cart',item)
  try {
    
       dispatch({

       type:"ADD_ITEM",
       payload:item
   })
  } catch (error) {
      console.log(error)
  }
}

export const deleteItem =(item)=>async dispatch=>{
    console.log(item)
    //await axios.delete('/api/cart',item)
  try {
    
       dispatch({

       type:"DELETE_ITEM",
       payload:item
   })
  } catch (error) {
      console.log(error)
  }
}

export const showItem =()=>async dispatch=>{
   const {data} = await axios.get('/api/cart')
  try {
    
       dispatch({

       type:"SHOW_ITEM",
       payload:data
   })
  } catch (error) {
      console.log(error)
  }
}



/*
return{
        type: "ADD_ITEM",
        payload:id
    }
*/