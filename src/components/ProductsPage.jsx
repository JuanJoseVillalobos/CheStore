import { useContext } from "react"
import { CardComponent } from "./CardComponent"
import { ProductContext } from "../context/ProductContext"
import { CartContext } from "../context/CartContext"
import "../css/card.css"

export const ProductsPage = () => {
    const {products} = useContext(ProductContext)
    const { addProduct, removeProduct} = useContext(CartContext)

    return (
        <>
            <h1>Productos</h1>
            <div className="products">
                {products.map(product => (
                    <CardComponent
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        imageUrl={product.image}
                        onAdd={() => addProduct(product)}
                        onRemove={() => removeProduct(product.id)}
                    />
                ))}
            </div>
        </>
    )
}
