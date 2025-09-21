import { div } from 'motion/react-client';
import React from 'react'

const ChildParent = () => {
  return (
     <Parent>
                <Children content={"Hi"}/>
                <Children content={"Hello"}/>
                <Children content={"Bye"}/>
     </Parent>
  )
}

export default ChildParent;

const Parent =({children})=>{
    return(
        <div>
            <ul className='bg-[aqua]'>
                {children}
            </ul>
        </div>

    )
}

const Children =({content})=>{
    return(
        <div>
            <li className='list-disc ml-4'>{content}</li>
        </div>
    )
}