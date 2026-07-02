import React from 'react'

const NavCategory = ({title}) => {
  return (
    <a href={`#${title.toLowerCase()}`} style={{textDecoration: 'none', color: 'inherit'}}>
      {title}
    </a>
  )
}

export default NavCategory