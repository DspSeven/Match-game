const DisplayImage = props => {
  const {imageDetails, displaySelectedImage} = props
  const {imageUrl, thumbnailUrl} = imageDetails

  const displaySelectImage = () => {
    displaySelectedImage(imageUrl)
  }

  return (
    <li>
      <button type="button">
        <img src={thumbnailUrl} alt="thumbnail" onClick={displaySelectImage} />
      </button>
    </li>
  )
}
export default DisplayImage
