import './index.css'

const History = props => {
  const {historyDetails, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="history-item-container">
      <p className="history-time">{timeAccessed}</p>
      <div className="item-content-container">
        <div className="item-details-container">
          <div className="item-logo">
            <img src={logoUrl} alt="domain logo" className="logo" />
          </div>
          <div className="item-text-container">
            <p className="item-heading">{title}</p>
            <p className="item-url">{domainUrl}</p>
          </div>
        </div>

        <button
          data-testid="delete"
          type="button"
          className="delete-container"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default History
