import './Products.css'
import { useState, useEffect } from 'react'
import { Layout, Product, Search, Sort } from '../../components'
import { AZ, ZA, lowestFirst, highestFirst } from '../../utils/sort'
import { getProducts } from '../../services/products'

export default function Products(props) {
  const [products, setProducts] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [applySort, setApplySort] = useState(false)
  const [sortType, setSortType] = useState('name-ascending')

  useEffect(() => {
      const fetchProducts = async () => {
        const allProducts = await getProducts()
        setProducts(allProducts)
        setSearchResult(allProducts)
      }
      fetchProducts()
  }, [])

  const handleSort = (type) => {
      if (type !== '' && type !== undefined) {
        setSortType(type)
      }
      switch (type) {
        case 'name-ascending':
            setSearchResult(AZ(searchResult))
            break
        case 'name-descending':
            setSearchResult(ZA(searchResult))
            break
        case 'price-ascending':
            setSearchResult(lowestFirst(searchResult))
            break
        case 'price-descending':
            setSearchResult(highestFirst(searchResult))
            break
        default:
            break
      }
  }

  if (applySort) {
      handleSort(sortType)
      setApplySort(false)
  }

  const handleSearch = (e) => {
      const results = products.filter((product) => 
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
      setSearchResult(results)
      setApplySort(true)
  }

  const handleSubmit = (e) => e.preventDefault()

  return (
      <Layout user={props.user}>
        <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
        <Sort onSubmit={handleSubmit} handleSort={handleSort} />
        <div className='products'>
            {searchResult.map((product, index) => {
              return (
                  <Product
                    _id={product._id}
                    name={product.name}
                    imgURL={product.imgURL}
                    price={product.price}
                    key={index}
                  />
              )
            })}
        </div>
      </Layout>
  )
}
