import { useState, useEffect } from 'react'
import './ProductEdit.css'
import { useParams, Redirect } from 'react-router-dom'
import { Layout } from '../../components'
import { getProduct, updateProduct } from '../../services/products'

const ProductEdit = (props) => {
  const [product, setProduct] = useState({
    name: '',
    details: '',
    price: '',
    imgURL: '',
    email: '',
  })

  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id)
      setProduct(product)
    }
    fetchProduct()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({
      ...product,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await updateProduct(id, product)
    setUpdated(updated)
  }
  if (isUpdated) {
    return <Redirect to={`/products/${id}`} />
  }

  return (
    <Layout user={props.user}>
      <div>
        <h2>EDIT PRODUCT</h2>
        <form className='input-form' onSubmit={handleSubmit}>
          <input
            className='input-name'
            placeholder='NAME'
            value={product.name}
            name='name'
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className='input-price'
            placeholder='PRICE'
            value={product.price}
            name='price'
            required
            onChange={handleChange}
          />
          <textarea
            className='textarea-details'
            rows={10}
            cols={50}
            placeholder='DETAILS'
            value={product.details}
            name='details'
            required
            onChange={handleChange}
          />
          <input
            className='input-img'
            placeholder='IMAGE'
            value={product.imgURL}
            name='imgURL'
            required
            onChange={handleChange}
          />
          <input
            className='input-email'
            placeholder='EMAIL'
            value={product.email}
            name='email'
            required
            onChange={handleChange}
          />
          <button type='submit' className='save-btn'>
            SAVE
          </button>
        </form>
      </div>
    </Layout>
  )
}
export default ProductEdit
