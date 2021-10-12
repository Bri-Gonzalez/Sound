import { useState, useEffect } from 'react'
import './ProductDetail.css'
import { Layout } from '../../components'
import { getProduct, deleteProduct } from '../../services/products'
import { useParams, Link } from 'react-router-dom'
import { FaEdit, FaTrash } from 'react-icons/fa'
import {useHistory} from 'react-router'

const ProductDetail = (props) => {
  const [product, setProduct] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id)
      setProduct(product)
      setLoaded(true)
    }
    fetchProduct()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  const handleDelete = async () => {
    if (props.user) {
      await deleteProduct(product._id)
      history.push('/products')
    } else {
      history.push('/sign-up')
    }
  }

  return (
    <Layout user={props.user}>
      <div className='product-detail'>
        <img
          className='product-detail-image'
          src={product.imgURL}
          alt={product.name}
        />
        <div className='detail'>
          <div className='name'>{product.name} </div>
          <div className='price'>{`$${product.price}`}</div>
          <div className='description'>{`Overview: ${product.details}`}</div>
          <div className='email'>{`Contact seller to purchase: ${product.email}`}</div>
          <div className='button-container'>
            <Link className='edit-button' to={`/products/${product._id}/edit`}>
              <FaEdit />
            </Link>
            <button
              className='delete-button'
              onClick={(handleDelete)}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default ProductDetail
