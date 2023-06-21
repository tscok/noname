import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const NotFoundPage: FC = () => {
  const location = useLocation()

  return (
    <>
      <h1>404</h1>
      <h5>Route "{location.pathname}" not found</h5>
      <p>
        Go to <Link to="/">start page</Link>
      </p>
    </>
  )
}
