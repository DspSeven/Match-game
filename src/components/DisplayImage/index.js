import './index.css'

const DisplayImage = props => {
  const {imageDetails, displaySelectedImage} = props
  const {imageUrl, thumbnailUrl} = imageDetails

  const displaySelectImage = () => {
    displaySelectedImage(imageUrl)
  }

  return (
    <li className="display-list-container">
      <button type="button" className="button">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          onClick={displaySelectImage}
          className="display-images"
        />
      </button>
    </li>
  )
}
export default DisplayImage
