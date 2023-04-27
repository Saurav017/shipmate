import React, {createContext, useContext, useState,useReducer} from 'react'
import { useNavigate } from "react-router-dom";

const StateContext = createContext()

function reducer(state, action) {
    
    switch (action.input) {
        case "origin":
            return { ...state, origin: action.value };
        case "destination":
            return { ...state, destination: action.value };
        case "date":
            return { ...state, date: action.value };
        case "weight":
            return { ...state, weight: action.value };
        case "length":
            return { ...state, length: action.value };
        case "width":
            return { ...state, width: action.value };
        case "height":
            return { ...state, height: action.value };
        case "quantity":
            return { ...state, quantity: action.value };
        default:
            break;
    }
    
    return { ...state}
  }

export const ContextProvider = ({children}) => {


    const navigate = useNavigate();

 
    const [isNotAuth, setIsNotAuth] = useState(true)
    const [currency,setCurrency]  = useState("$")
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    const [isSubmit, setIsSubmit] = useState(true);


    const [state, dispatch] = useReducer(reducer, {
        origin: "",
        destination: "",
        date: "",
        weight: "",
        length: "",
        width: "",
        height: "",
        quantity: "",

    })

    console.log(state)
    // handle login state, if logged In the initial states will be true
    const handleAuth = () =>   {
        setIsNotAuth(false)
    }
        
    const handleChange = (e) => {
        setCurrency(e.target.value)
    }
    

    const goToHome = (e) =>  {
        e.preventDefault();
        navigate("/")
        setIsSubmit(true);
        setCurrentStep(1)
        setIsNotAuth(true)
    }
        

    

    // form input change handler
    const onChange = (e) => {
        dispatch({ input: e.target.name, value: e.target.value });
        };

    const handleSubmit = (e) => {
        
        if(state.origin === "" || state.destination === "" || state.date === "" || state.weight === "" || state.length === "" || state.width === "" || state.height === "" || state.quantity === ""){
            alert("Please fill all the fields")
            return
        }

        navigate("/shipping")
        setIsNotAuth(false)
        setCurrentStep(3);
        
    }
    return (
        <StateContext.Provider value={{
            
            isNotAuth,
            handleAuth,
            currency,
            setCurrency,
            handleChange,
            currentStep,setCurrentStep,
            complete,setComplete,
            onChange,handleSubmit,
            state,dispatch,
            isSubmit,setIsSubmit,
            goToHome
            
        }}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);