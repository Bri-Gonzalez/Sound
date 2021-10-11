import './Sort.css'

export default function Sort(props) {

  const handleSort = (e) => {
    props.handleSort(e.target.value)
  }

  return (
    <form className='sort-container' onSubmit={props.handleSubmit}>
      {/* <label htmlFor='sort'>SORT BY:</label> */}
      <select className='sort' onChange={handleSort}>
        <option>SORT BY:</option>
        <option className='option' value='name-ascending'>&nbsp; Alphabetically, A-Z &nbsp;</option>
        <option value='name-decending'>&nbsp; Alphabetically, Z-A &nbsp;</option>
        <option value='price-ascending'>&nbsp; Price, low to high &nbsp;</option>
        <option value='price-decending'>&nbsp; Price, high to low &nbsp;</option>
      </select>
    </form>
  )
}
