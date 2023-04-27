import React,{useState} from 'react'
import { useStateContext } from '../../context/ContextProvider';
import { TiTick } from "react-icons/ti";
const Progress = () => {
  
  const steps = ["Search", "Services", "Results", "Booking"];
  const {currentStep,setCurrentStep,complete,setComplete} = useStateContext()

  return (
    <>
      <div className="font-0 py-24 w-full flex items-center justify-center ">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
     
    </>
  );
}

export default Progress