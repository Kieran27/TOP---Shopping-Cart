import React from 'react'
import { Link } from 'react-router-dom'

const AnnouncementBar = () => {
  return (
    <div className="announcement-bar">
      <Link to="/shop">New Bikes In Stocks</Link>
    </div>
  )
}

export default AnnouncementBar
