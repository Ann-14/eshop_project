
export const ProductFilter = () => {
  return (
    <>
      <aside className="flex flex-col">
        <h3>Categories</h3>
        <div>
          <button>All</button>
        </div>
        <h3>Price</h3>
        <p>1500</p>
        <div>
          <input type='range' name='price' min='100' max='1000' />
        </div>
        <br />
        <button>Clear Filter</button>
      </aside>
    </>
  )
}
