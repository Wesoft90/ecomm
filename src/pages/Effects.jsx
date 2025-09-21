import axios from 'axios';
import { ul } from 'motion/react-client';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import Clock from '../Components/Clock';

const Effects = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('P');

    const [product, setProduct] = useState([]);

    const change = () => {
        setCount(count + 1)
        setName('Shivam')
    }

    // useEffect(() => {
    //     console.log("component Rendered");
    // }) //it will Run every time when anything change in states and props , rendered in UI

    // useEffect(() => {
    //     console.log("component Re - rendered")
    //     getData();
    // }, []); // run only once when component is Rendered in Ui


    // const getData = async () => {
    //     try {
    //         const response = await axios.get("https://fakestoreapi.com/products/");
    //         const products = await response.data;  
    //         setProduct(products);
    //     } catch (error) {
    //         console.error("Errors in fetching Details : ", error);
    //     }
    // }



    // useEffect(()=>{
    //     console.log(count);
    // },[count])

    // useEffect(()=>{
    //     console.log("count : ",count," Name : ",name);       
    // },[name,count])

    useEffect(()=>{
        console.log("component Re rendered");
        return ()=>{console.log("component Unmounted");
        }
        
    },[])
    return (
        <div>
            <h1>Hello CountDown : {count}</h1>

            <p>{name}</p>

            {/* <button onClick={change} style={{background:"green" ,padding:"2px" ,marginLeft:"5px",textAlign:"center" , fontSize:"18px" }}>Count</button> */}
            <button onClick={change} className="px-2 py-1 mt-3 ml-3 text-2xl text-gray-100 bg-amber-700 rounded"> Count </button>
            {/* <p>{JSON.stringify(product)}</p> */}
            
            {/* <div className="m-3 p-5 bg-transparent grid grid-cols-4 items-center gap-3">
            {
               product.length === 0 ? <h2>No Any Data</h2> : product.map((item, i) => (
                    <ProductCard data={item} key={i} />
                ))
            }
            </div> */}
            

            <Clock />
        </div>
    )
}

export default Effects;


// const ProductCard = ({ data }) => {

//     // console.log(props)
//     // let course = props.course;
//     // let {course,institute} = props;
//     // console.log(course)

//     return (
//         <div className="mx-2 w-full max-w-sm max-h-[600px] bg-white border border-gray-200 rounded-xl shadow-md dark:bg-gray-800 dark:border-gray-900">
//             <Link to="">
//                 <img className="rounded-xl w-full h-50 object-contain" src={data.image} alt="product image" />
//             </Link>

//             <div className=" p-2 mt-1">
//                 <Link to="">
//                     <h4 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{data.title}</h4>
//                     <h5 className="text-sm font-medium tracking-tight text-gray-900 dark:text-white flex gap-1 flex-wrap">
//                             {
//                                 data.rating && (
//                                     <ul>
//                                         <li>Rate: {data.rating.rate}</li>
//                                         <li>Count: {data.rating.count}</li>
//                                     </ul>
//                                 )
//                             }
//                     </h5>

//                 </Link>

//                 {/* <p className='text-sm text-wrap font-light text-gray-900'>Description: {data.description} </p> <span className='text-sm text-gray-900'> Category : {data.category}</span> */}

//                 <div className="flex items-center mt-2.5 mb-5">
//                     <div className="flex items-center space-x-1 rtl:space-x-reverse">
//                         <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                             <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                         </svg>
//                         <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                             <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                         </svg>
//                         <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                             <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                         </svg>
//                         <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                             <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                         </svg>
//                         <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                             <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                         </svg>
//                     </div>
//                     <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
//                 </div>

//                 <p className='text-sm font-light text-gray-900'></p>
//                 <div className="flex items-center justify-between pb-3">
//                     <span className="text-3xl font-bold text-gray-900 dark:text-white">${data.price}</span>
//                     <Link to="" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</Link>
//                 </div>
//             </div>
//         </div>
// )
// };
