import './ProductCreate.css'
import { useState } from 'react'
import { Layout } from '../../components'
import { Redirect } from 'react-router-dom'
import { createProduct } from '../../services/products'

export default function ProductCreate(props) {
   const [product, setProduct] = useState({
      name: '',
      details: '',
      price: '',
      imgURL: '',
      email: '',
   })

   const [isCreated, setCreated] = useState(false)

   const handleChange = (e) => {
      const { name, value } = e.target
      setProduct({
         ...product,
         [name]: value,
      })
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      const created = await createProduct(product)
      setCreated({ created })
   }

   if (isCreated) {
      return <Redirect to={`/products`} />
   }

   return (
      <Layout user={props.user}>
      <div>
        <h2>ADD PRODUCT</h2>
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
            SELL
          </button>
        </form>
      </div>
    </Layout>
   )
}
