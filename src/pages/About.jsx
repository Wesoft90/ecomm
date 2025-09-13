import React, { useState } from 'react'

const About = () => {
  // const data = useState();
  // console.log(data)
  
  const [data,setData] = useState("Java Full Stack Development");
  const [price,setPrice] = useState(8000);
  const [quantity,setQuantity] = useState(0)

  const change1 = ()=>{
      setData("Python Developer")
  }
  const change2 = ()=>{
      setPrice(12000)
  }
  const change3 = ()=>{
    setQuantity(quantity+1);
  }

  setTimeout(()=>{
    setData("MERN Full Stack");
  },5000);

  return (
    <div>
      <h1>Hello, Welcome to Institute to learn : {data} </h1>
      <h2>The Price of Full Course is : {price}</h2>
      <h3>You Can Set Quantity of Books you want to purchase:{quantity}</h3>
        <div className='text-xl text-gray-900'>
          {
            quantity > 3 ? <h6 className='text-red-800'>Enough to Brought</h6> : <h6 className='text-gray-900'>You can Buy</h6>
          }
          </div>
  <div className='flex justify-around items-center mt-2'>
    <button onClick={change1} className="text-xl font-medium px-2 py-3 bg-blue-500 text-gray-900 cursor-pointer">Click Data</button>
    <button onClick={change2} className="text-xl font-medium px-2 py-3 bg-blue-500 text-gray-900 cursor-pointer">Click Price</button>
    <button onClick={change3} className="text-xl font-medium px-2 py-3 bg-blue-500 text-gray-900 cursor-pointer">Click Quantity</button>
</div>
    </div>
  )
}

export default About