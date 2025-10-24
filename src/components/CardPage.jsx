import { CartContext } from "../context/CartContext"
import { useContext } from "react"

export const CardPage = () => {
    const {shoppingList, addProduct, removeProduct, incrementQuantity, decrementQuantity} = useContext(CartContext)
    const fmt = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'USD' })
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {shoppingList.map(product => (
                        <tr key={product.id}>
                            <td>
                                <img className="thumb" src={product.image} alt={product.title} />
                            </td>
                            <td>{product.title}</td>
                            <td>{fmt.format(product.price)}</td>
                            <td>{product.quantity}</td>
                            <td>
                                <button className="add-button" onClick={() => incrementQuantity(product.id)}>+</button>
                                <button disabled={product.quantity <= 1} className="remove-button" onClick={() => decrementQuantity(product.id)}>-</button>
                                <button className="delete-button" onClick={() => removeProduct(product.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        
        </>
    )
}