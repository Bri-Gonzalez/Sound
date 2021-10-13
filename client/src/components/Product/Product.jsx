import './Product.css'
import { Link } from 'react-router-dom'

export default function Product(props) {
  return (
    <div className='product-list'>
      <Link className='product' to={`/products/${props._id}`}>
        <img className='product-img' src={props.imgURL} alt={props.name} />
        <h2 className='product-name'>{props.name}</h2>
        <p className='price'>{`$${props.price}`}</p>
      </Link>
    </div>
  )
}
