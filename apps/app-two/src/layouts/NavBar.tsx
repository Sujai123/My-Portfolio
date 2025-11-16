import React from 'react'

const NavBar = () => {
  return (
    <ul className='fixed left-1/2 -translate-x-1/2 top-10 px-10 py-4 rounded-full flex gap-3 shadow-lg'>
      <li>Home</li>
      <li>About</li>
      <li>Experience</li>
      <li>Projects</li>
    </ul>
  )
}

export default NavBar