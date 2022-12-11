import './index.css'

const TabItem = props => {
  const {tabDetails, selectedCategory, isActive} = props
  const {tabId, displayText} = tabDetails
  const isAct = isActive ? 'button-highlight-color' : 'button-color'
  // sends selected category
  const selectCategory = () => {
    selectedCategory(tabId)
  }

  return (
    <li className="tab-list-container">
      <button type="button" onClick={selectCategory} className={isAct}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
