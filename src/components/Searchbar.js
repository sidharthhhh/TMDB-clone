import React from 'react'


const Searchbar = () => {
  return (
   <>
    <div className="search-bar bg-blue-950 text-white h-80 px-40 mx-40">
    <h1>Welcome</h1>
     <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
     <div className="input-search flex justify-start gap-4">
        <input type="text" className='w-[32rem] rounded-full  p-1 mt-20 text-gray-950' />
        <button className='mt-20'>Search</button>
     </div>
    </div>
   </>
  )
}

export default Searchbar