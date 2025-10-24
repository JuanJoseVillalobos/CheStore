import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../context/ProductContext"
import { CartContext } from "../context/CartContext"
import banner from "../assets/banner.png"
import "../css/gallery.css"
import "../css/carousel.css"

export const GalleryPage = () => {
  const { products } = useContext(ProductContext)
  const { shoppingList, addProduct, removeProduct } = useContext(CartContext)
  const [index, setIndex] = useState(0)

  const isInCart = (id) => shoppingList?.some(p => p.id === id)
  const count = products?.length || 0

  useEffect(() => {
    if (index >= count) setIndex(0)
  }, [count, index])

  const prev = () => setIndex((i) => (count ? (i - 1 + count) % count : 0))
  const next = () => setIndex((i) => (count ? (i + 1) % count : 0))
  const goTo = (i) => setIndex(i)

  return (
    <>
      <img className="banner" src={banner} alt="Banner" />
      <h1 className="welcome-title">Productos Principales</h1>
      <div className="carousel">
        {count === 0 ? (
          <div className="carousel-empty">Cargando productos...</div>
        ) : (
          <div className="carousel-slide">
            <img src={products[index].image} alt={products[index].title} />
            <div className="carousel-info">
              <h2>{products[index].title}</h2>
              <p className="price">${products[index].price}</p>
              {isInCart(products[index].id) ? (
                <button onClick={() => removeProduct(products[index].id)}>Quitar del carrito</button>
              ) : (
                <button onClick={() => addProduct(products[index])}>Añadir al carrito</button>
              )}
            </div>
            <button className="nav prev" onClick={prev} aria-label="Anterior">‹</button>
            <button className="nav next" onClick={next} aria-label="Siguiente">›</button>
          </div>
        )}
        {count > 1 && (
          <div className="carousel-dots">
            {products.map((_, i) => (
              <button key={i} className={"dot" + (i === index ? " active" : "")} onClick={() => goTo(i)} aria-label={`Ir a slide ${i+1}`}></button>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
