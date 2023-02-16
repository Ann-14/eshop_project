import React from 'react'
import { BiSearch } from 'react-icons/bi'
export const Search = ({ value, onChange }) => {
    return (
        <>
            <div className='flex'>
                <BiSearch className='mt-1' />
                <input type='text' value={value} onChange={onChange} placeholder='Search'  className="input input-bordered h-8"/>
              
            </div>
        </>
    )
}
