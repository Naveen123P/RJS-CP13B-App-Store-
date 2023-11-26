// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="app-img" />
      <h1 className="app-name">{appName}</h1>
    </li>
  )
}

export default AppItem
