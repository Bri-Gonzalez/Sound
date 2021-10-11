import './Search.css'

export default function Search(props) {
  return (
    <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
      <input
        className="search-bar"
        value={props.value}
        onChange={(e) => props.handleSearch(e)}
        name='Search'
        placeholder='Search product'
        type='text'
        autoFocus
      />
    </form>
  )
}
