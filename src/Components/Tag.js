import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';





const Tag = () => {
    
     const[tag,setTag]=useState("car");
     const {gif, loading, fetchData} = useGif(tag);
      

  
    
  return (
    <div className='w-1/2  bg-blue-500 border border-black mt-5 rounded-lg flex flex-col items-center gap-y-5'>
        <h1 className=' mt-[15px] font-bold text-xl underline uppercase'>A Random {tag} Gif</h1>
        {
          loading ? (<Spinner/>):(<img src={gif} alt="" width="450" />)
          
        }
         <input  
          className='rounded-lg w-9/12 py-2 px-3  text-center'
          onChange={(event)=>setTag(event.target.value)}
          value={tag}
         />
      
        <button onClick={()=>fetchData(tag)} className=' mb-[20px] bg-white opacity-70 rounded-lg w-9/12 py-2 px-3 font-bold text-lg'>Genrate</button>
    </div>
  )
}

export default Tag