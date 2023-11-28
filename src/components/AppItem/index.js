// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl, category} = appDetails

  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="app-img" />
      <p value={category} className="app-name">
        {appName}
      </p>
    </li>
  )
}

export default AppItem
