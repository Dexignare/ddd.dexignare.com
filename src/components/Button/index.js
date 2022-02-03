import React from 'react'

const Button = ({ text }) => {
  return (
    <div className='mt-5 sm:mt-8 sm:flex justify-center'>
      <div className='p-0.5 bg-gradient-to-l from-magenta-500 via-fuchsia-500 to-violet-500 rounded-tl-xl rounded-br-xl'>
        <div className='rounded-tl-xl rounded-br-xl shadow'>
          <button
            className='w-full bg-black flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-tl-xl rounded-br-xl text-white border-2 md:py-4 md:text-lg md:px-10 font-montserrat'
          >
            {text}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Button
