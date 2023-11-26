// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, getUpdateTabId} = props
  const {tabId, displayText} = tabDetails

  const updateTabId = () => {
    getUpdateTabId(tabId)
  }

  const activeTabItem = isActive ? 'active-tab-button' : ''

  return (
    <li className="list-item">
      <button
        className={`tab-text ${activeTabItem}`}
        type="button"
        onClick={updateTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
