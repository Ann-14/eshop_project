import React from 'react'
import { BiSearch } from 'react-icons/bi'
export const Search = ({ value, onChange }) => {
    return (
        <>
            <div className='flex'>
                <BiSearch className='mt-1 md:mt-1 w-6 h-6  mr-1 text-white' />
                <input type='text' value={value} onChange={onChange} placeholder='Search'  className="input input-bordered h-8"/>
              
            </div>
        </>
    )
}
