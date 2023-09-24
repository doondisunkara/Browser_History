import './index.css'

const Title = props => {
  const {searchInput, onChangeInput} = props
  const onSearchInputChange = event => {
    onChangeInput(event.target.value)
  }

  return (
    <div className="title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
        alt="app logo"
        className="history-logo"
      />
      <div className="search-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/search-img.png"
          alt="search"
          className="search-icon"
        />
        <input
          type="search"
          onChange={onSearchInputChange}
          value={searchInput}
          className="search-input"
          placeholder="Search history"
        />
      </div>
    </div>
  )
}

export default Title
