import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { NavLink } from "react-router-dom"

export const CardComponent = ({ id, title, description, price, imageUrl, onAdd, onRemove }) => {
    const { shoppingList } = useContext(CartContext)
    const added = shoppingList?.some(product => product.id === id)
    const fmt = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'USD' })

    const getFirstSentences = (text, n = 3) => {
        if (!text) return ""
        const sentences = text.match(/[^.!?]+[.!?…]+|[^.!?…]+$/g) || [text]
        return sentences.slice(0, n).join(" ").trim()
    }

    const addProduct = () => {
        onAdd()
    }
    const removeProduct = () => {
        onRemove()
    }
    
    return (<div className="card">
        <NavLink to={`/product/${id}`}>
            <img src={imageUrl} alt={title} />
        </NavLink>
        <NavLink to={`/product/${id}`} className="card-title-link">
            <h2>{title}</h2>
        </NavLink>
        <p>{getFirstSentences(description, 3)}</p>
        <p className="price">{fmt.format(price)}</p>
        {
            added ? (
                <button onClick={removeProduct}>Quitar del carrito</button>
            ) : (
                <button onClick={addProduct}>Añadir al carrito</button>
            )
        }
    </div>
    )
}

