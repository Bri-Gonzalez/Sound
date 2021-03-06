import { useState, useEffect } from 'react'
import './ProductDetail.css'
import { Layout } from '../../components'
import { getProduct, deleteProduct } from '../../services/products'
import { useParams, Link } from 'react-router-dom'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useHistory } from 'react-router'
import ScaleLoader from 'react-spinners/ScaleLoader'

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

  const handleDelete = async () => {
    if (props.user) {
      await deleteProduct(product._id)
      history.push('/products')
    } else {
      history.push('/sign-up')
    }
  };

  return (
    <Layout user={props.user}>
        {!isLoaded ? <div className='loading-details'><ScaleLoader /></div> : (
          <div className='product-detail'>
            <div className='detail-img'>
              <img src={product.imgURL} alt={product.name} />
            </div>
            <div className='detail'>
              <div className='name'>
                <b>{product.name}</b>
              </div>
              <div className='price'>{`$${product.price}`}</div>
              <p className='overview'>
                <b>Overview:</b>
              </p>
              <div className='description'>{product.details}</div>
              <div className='email'>
                <b>Contact seller to purchase:</b> {product.email}
              </div>
              <div className='button-container'>
                <Link
                  className='edit-button'
                  to={`/products/${product._id}/edit`}
                >
                  <FaEdit />
                </Link>
                <FaTrash className='delete-button' onClick={handleDelete} />
              </div>
            </div>
          </div>
        )}
    </Layout>
  );
};
export default ProductDetail;
