import React from 'react'

export const Checkout = () => {
  return (
   
<div className="min-h-screen flex justify-center items-center ">
  <div className="p-10 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-3">
    <div className="py-8">
      <img width="30" className="-mt-10" src="https://www.paypalobjects.com/images/shared/momgram@2x.png" alt='paypal logo'/>
    </div>
    <input className="p-3 border-[1px]  rounded-sm w-80" placeholder="E-Mail or Phone number" />
    <div className="flex flex-col space-y-1">
      <input className="p-3 border-[1px] rounded-sm w-80" placeholder="Password" />
      <p className="font-bold text-[#0070ba]">Forgot password?</p>
    </div>
    <div className="flex flex-col space-y-5 w-full">
      <button className="w-full bg-[#0070ba] rounded-3xl p-3 text-white font-bold transition duration-200 hover:bg-[#003087]">Log in</button>
      <button className="w-full border-blue-900 hover:border-[#003087] hover:border-[2px] border-[1px] rounded-3xl p-3 text-[#0070ba] font-bold transition duration-200">Sign Up</button>
    </div>
  </div>
</div>
  )
}
