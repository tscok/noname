import { FC } from 'react'
import { Link } from 'react-router-dom'

export const Navigation: FC = () => (
  <>
    <Link to="/">Start Page</Link>
    <Link to="/dashboard">Dashboard Page</Link>
  </>
)
