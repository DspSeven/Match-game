const TabItem = props => {
  const {tabDetails, selectedCategory} = props
  const {tabId, displayText} = tabDetails

  // sends selected category
  const selectCategory = () => {
    selectedCategory(tabId)
  }

  return (
    <li>
      <button type="button" onClick={selectCategory}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
