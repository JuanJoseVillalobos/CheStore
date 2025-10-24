import { NavBarComponent } from "./components/NavBarComponent"
import { ProductProvider } from "./context/ProductProvider"
import { CartProvider } from "./context/CartProvider"
import { Routes, Route } from "react-router-dom"
import { ProductsPage } from "./components/ProductsPage"
import { Carrito } from "./components/Carrito"
import { GalleryPage } from "./components/GalleryPage"
import { ProductDetail } from "./components/ProductDetail"
import "./css/base.css"
import { Footer } from "./components/Footer"

export const App = () => {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <NavBarComponent />
          <main className="container">
            <h1 className="welcome-title">Bienvenidos a CheStore</h1>
            <Routes>
              <Route path="/" element={<GalleryPage />} />
              <Route path="/productos" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/carrito" element={<Carrito />} />
            </Routes>
          </main>
          <Footer/>
        </CartProvider>
      </ProductProvider>
    </>
  )
}
