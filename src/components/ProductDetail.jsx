import { useContext, useMemo } from "react"
import { useParams } from "react-router-dom"
import { ProductContext } from "../context/ProductContext"
import { CartContext } from "../context/CartContext"
import "../css/product-detail.css"

export const ProductDetail = () => {
  const { id } = useParams()
  const { products } = useContext(ProductContext)
  const { shoppingList, addProduct, removeProduct } = useContext(CartContext)

  const product = useMemo(() => {
    const pid = Number(id)
    return products.find(p => p.id === pid)
  }, [products, id])

  const isInCart = (pid) => shoppingList?.some(p => p.id === pid)

  if (!product) {
    return <div className="carousel-empty">Cargando producto...</div>
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <div className="info">
        <h2 className="product-title">{product.title}</h2>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        {isInCart(product.id) ? (
          <button onClick={() => removeProduct(product.id)}>Quitar del carrito</button>
        ) : (
          <button onClick={() => addProduct(product)}>Añadir al carrito</button>
        )}
      </div>
    </div>
  )
}
