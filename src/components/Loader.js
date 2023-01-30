import React from 'react'

export const Loader = () => {
  let circleCommonClasses = 'h-3.5 w-3.5 bg-current  rounded-full ';
  return (
    <div className='flex justify-center text-black'>
      
    <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
    <div
        className={`${circleCommonClasses} mr-1 animate-bounce200`}
    ></div>
    <div className={`${circleCommonClasses} animate-bounce400`}></div>
</div>
  )
}