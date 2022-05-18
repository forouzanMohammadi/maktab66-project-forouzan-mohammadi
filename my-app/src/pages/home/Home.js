import React from 'react'
import UserLayout from 'layouts/UserLayout'
import {Link} from '@mui/material'

function Home(props) {
  return (
    <div>
      <Link>کلاه بچگانه</Link>
      <Link>کلاه زنانه</Link>
      <Link>کلاه مردانه</Link>
    </div>
  )
}
export default UserLayout(Home)