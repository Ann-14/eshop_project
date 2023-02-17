

export const Sort = ({sort,setSort}) => {
  
    return (
      <>
       <div>
          
          <select value={sort} onChange={(e) => setSort(e.target.value)} className='select select-primary select-sm w-full max-w-xs'>
            <option value='latest'>Latest</option>
            <option value='lowest-price'>Lowest price</option>
            <option value='highest-price'>Highest Price</option>
            <option value='a-z'>A-Z</option>
            <option value='z-a'>Z-A</option>
          </select>
        </div>
      
      </>
    )
  }
  