import { createContext } from "react";
import {redWine, whiteWine, roseWine} from "../data"
import { useState, useReducer, useEffect } from "react";


export const ContextWine = createContext()

const initialState = {
    cart: JSON.parse(localStorage.getItem("items")) || [],
    redWine: redWine,
    whiteWine: whiteWine,
    roseWine: roseWine,
    isSignUp: false
}

function reducer(state, action){
    switch (action.type) {
        case "add":{
            const itemObj = state.cart.find(item => item.name === action.payload.name)
            if(!itemObj){
                return{
                    ...state, cart: [...state.cart, {...action.payload, orQu: action.payload.orQu + 1}]
                }
            }else{
                const updatedCart = state.cart.map(obj => obj.id === itemObj.id ? {...obj, orQu: obj.orQu +1}: obj)

                return {
                    ...state, cart: updatedCart
                }
            }
        }
            case "delete":{
                const filtered = state.cart.filter(obj => obj.id !== action.payload)
                return {...state, cart: filtered}
            }
            case "signUp":{
                return {...state, isSignUp: true}
            }
            case "logout":{
                return {...state, isSignUp: false}
            }
         
    }
}


function ContextProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state.cart);

    const [user, setUser]=useState(JSON.parse(localStorage.getItem("user")) ||{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      
    });

    const [error, setError] = useState({content:"",open:false})

    
    function handleClick(obj){
      dispatch({type: "add", payload: obj})
    }
    
    useEffect(()=> {
      const savedItems = localStorage.setItem("items", 
    JSON.stringify(state.cart))
    }, [state.cart])

    useEffect(()=> {
      const logedInUser = localStorage.setItem("user", 
    JSON.stringify(user))
    }, [user])

  return (
    <ContextWine.Provider value={{user, setUser, state, dispatch, handleClick, error, setError}}>{children}</ContextWine.Provider>
  )
}

export default ContextProvider



