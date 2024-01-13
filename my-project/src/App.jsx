import React from 'react'

function App() {
  return (
    <div>
      <div className='bg-blue-800 h-2'></div>
      <nav className='flex bg-red-500 h-20  items-center' >

        <h1 className=' text-white text-xl font-bold pl-4 '>Kalvium</h1>
        <a href='' className='ml-4 text-red-100'>About Us</a>
        <a href='' className='ml-4 text-red-100'>Contact</a>
        <a href='' className='ml-4 text-red-100'>Courses</a>
        <div className='ml-auto mr-5'>
          <button className='text-white border border-white h-10 w-20 rounded '>Login</button>
        </div>

      </nav>
      <button className='bg-blue-500 font-bold text-white mt-10 ml-4  p-2 rounded ml-20 btnone'>
        Button One
      </button>
      <div className='ml-20 mt-6 border border-red-300 p-3 text-red-600 bg-red-100 border border-red-700 rounded alertbox'> <span className='font-bold'>Alert!</span> This is awesome!</div>
      
<center >
<div className='flex mt-5 border  h-20 card1 shadow-lg'>
        <img className='h-5 shrink b' src='https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png' />
        <div>
          <h2 className='text-xl font-semibold'>Kalvium store</h2>
          <p className=''>You have a new courses</p>
        </div>
      </div>
</center>

<footer className=' flex bg-gray-300 border h-20 justify-center footer'>
  <center >
  ©2021 Copyright:Kalvium
  </center>
</footer>

    </div>
  )
}

export default App