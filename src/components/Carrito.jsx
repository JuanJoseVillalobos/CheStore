import { CardPage } from "./CardPage"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Swal from 'sweetalert2'
import '../css/CarritoStyle.css'

export const Carrito = () => {
  const { shoppingList, dispatch } = useContext(CartContext)
  const total = shoppingList.reduce((acc, product) => acc + (product.price * product.quantity), 0)
  const totalCal = () => {
    return total.toFixed(2)
  }
  const comprar = () => {
    Swal.fire({
      icon: 'success',
      title: '¡Gracias por su compra!',
      text: 'Su compra ha sido realizada con exito',
    })
    dispatch({ type: '[CART] Clear Cart' })
  }
  return (
    <>
      <h1>Mi Carrito:</h1>
      <CardPage/>
      <h2>Total: {totalCal()}</h2>
      <button onClick={comprar}>Comprar</button>
    </>
  )
}
