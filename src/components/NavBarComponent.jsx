import '../css/NavBarComponent.css'
import { Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const NavBarComponent = () => {
  const { shoppingList } = useContext(CartContext)
  const count = shoppingList ? new Set(shoppingList.map(p => p.id)).size : 0
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
  
          <NavLink to="/" className="nav-link">Che Store</NavLink>
        </div>
        <ul className="navbar-links">
          <NavLink to="/" className="nav-link">Inicio</NavLink>
          <NavLink to="/productos" className="nav-link">Productos</NavLink>
          <a href="https://github.com/JuanJoseVillalobos/CheStore" target="_blank" className="nav-link">Repositorio</a>
          <a href="https://www.linkedin.com/in/juan-josé-villalobos-b98741265" target="_blank" className="nav-link">Contacto</a>
        </ul>
        <NavLink to="/carrito" className="nav-link">
          <Badge badgeContent={count} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </NavLink>
      </nav>
    </>
  )
}

