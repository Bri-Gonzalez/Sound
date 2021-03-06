import './Sort.css'

export default function Sort(props) {
  const handleSort = (e) => {
    props.handleSort(e.target.value)
  }

  return (
    <form className='sort-container' onSubmit={props.handleSubmit}>
      <label htmlFor='sort'>SORT BY:</label>
      <select className='sort' onChange={handleSort}>
        <option className='option' value='name-ascending'>
          &nbsp; Alphabetically, A-Z &nbsp;
        </option>
        <option value='name-descending'>
          &nbsp; Alphabetically, Z-A &nbsp;
        </option>
        <option value='price-ascending'>
          &nbsp; Price, low to high &nbsp;
        </option>
        <option value='price-descending'>
          &nbsp; Price, high to low &nbsp;
        </option>
      </select>
    </form>
  )
}
