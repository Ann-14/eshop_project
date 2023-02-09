import React from 'react'
import { BiSearch } from 'react-icons/bi'
export const Search = ({ value, onChange }) => {
    return (
        <>
            <div>
                <BiSearch />
                <input type='text' value={value} onChange={onChange} placeholder='Search' />
            </div>
        </>
    )
}
