import { ProductFilter } from "./ProductFilter"
import { ProductList } from "./ProductList"

export const Product = () => {
  return (
    <section>
      <div>
<aside>
  <ProductFilter/>
</aside>
<div>
  <ProductList/>
</div>

      </div>
    </section>
  )
}
