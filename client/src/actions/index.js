
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

export const fetchItems = ()=> async dispatch=>{
    
    const res = await axios.get('/api/items')

     dispatch({
         type:"FETCH_ITEMS",
         payload:res.data
     })
    
}





export const addItem =(item)=>async dispatch=>{
   /* try {
        const {data} = await api.addItem(item);
        console.log(data)
        dispatch({
            type:"ADD_ITEM",
            payload:data
        })
    } catch (error) {
        console.log(error)
    }*/
}

/*
return{
        type: "ADD_ITEM",
        payload:id
    }
*/