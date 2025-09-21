import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router';
import { ThemeContext } from '../Components/ThemeContext';


const Contact = () => {
const {work} = useParams();

const theme = useContext(ThemeContext);

  useEffect(()=>{
    console.log("Theme on Component Mounted ",theme); 

  },[theme])

  return(
    <div className={`${theme?.background} ${theme?.color} p-4`}>
      Contact:{work}
      
    </div>
  )
}

export default Contact;