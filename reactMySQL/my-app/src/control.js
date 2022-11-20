import {useState} from 'react';

export default function useFormState(inisialState){
        const [sendData, setSendData] = useState(inisialState);
  
        const updateInEvent = (event) => {

          setSendData({
              ...sendData,
              [event.target.name]: event.target.value
        
            })
 
        }


return [
  updateInEvent,
    sendData

]
}