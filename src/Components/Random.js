
import React from 'react';
import useGif from '../hooks/useGif';
import Spinner from './Spinner';






const Random = () => {
  const {gif, loading, fetchData} = useGif();
    
     
  return (
    <div className='w-1/2  bg-green-500 border border-black mt-5 rounded-lg flex flex-col items-center gap-y-5'>
        <h1 className=' mt-[15px] font-bold text-xl underline uppercase'>A Random Gif</h1>
        {
          loading ? (<Spinner/>):(<img src={gif} alt="" width="450" />)
          
        }
      
        <button onClick={()=>fetchData()} className=' mb-[20px] bg-white opacity-70 rounded-lg w-9/12 py-2 px-3 font-bold text-lg'>Genrate</button>
    </div>
  )
}

export default Random