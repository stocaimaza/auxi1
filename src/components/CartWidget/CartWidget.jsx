import './CartWidget.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';

const CartWidget = () => {
    const {carrito} = useContext(CarritoContext)
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png";

     // Calculamos la cantidad total de productos en el carrito
     const totalCantidad = carrito.reduce((total, producto) =>
     total + producto.cantidad, 0)

  return (
    <Link to='/cart'>
      <img className='imgCarrito' src ={imgCarrito} alt="Carrito" />
      {
        totalCantidad
      }
    </Link>
  )
}

export default CartWidget