import React from 'react'
import HeaderStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={HeaderStyles.header}>
      <img src="/images/me2.jpg" alt="" className={HeaderStyles.headerImg} />
    </div>
  )
}

export default Header