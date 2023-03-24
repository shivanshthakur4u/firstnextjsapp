import React from 'react'

const header = () => {
  return (
    <nav>
        <ul>
          
        <Link href={"/"}> <li>Home</li></Link>
        <Link href={"/about"}> <li>About</li></Link>
        </ul>
    </nav>
  )
}

export default header