import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className='d-flex justify-content-between mb-3 text-light py-3 bg-primary'>
      <h1 style={{cursor: "pointer"}}><Link className="text-decoration-none text-light mx-3" to="/">Booking Tracker</Link></h1>
      <div
        className='d-inline-flex justify-content-between mt-1 d-sm-none mx-3'
        style={{ cursor: 'pointer' }}
        onClick={() => setShowMenu(!showMenu)}
      >
        <i className='fas fa-bars mt-1 h4' />
        <p className='h6 mt-1 px-2'>MENU</p>
      </div>
      <div className="d-none d-md-inline mt-2">
        <ul
          className='list-group text-center d-flex flex-row px-4 h5'
          style={{ cursor: 'pointer'}}
        >
          <li className='list-group-item border-0 bg-primary'>
            <Link className='text-decoration-none text-light' to='/'>
              HOME
            </Link>
          </li>
          <li className='list-group-item border-0 bg-primary'>
            <Link className='text-decoration-none text-light' to='/add'>
              ADD
            </Link>
          </li>
        </ul>
      </div>
      {showMenu && (
        <>
          <div className='position-fixed w-100 h-100 bg-white'>
            <div className='d-flex justify-content-end'>
              <div
                className='d-inline-flex justify-content-between mt-1 px-4 text-primary'
                style={{ cursor: 'pointer' }}
                onClick={() => setShowMenu(!showMenu)}
              >
                <i className='fas fa-times mt-1 h4' />
                <p className='h6 mt-1 px-2'>CLOSE</p>
              </div>
            </div>
            <div className='h-100 d-flex w-100 justify-content-center align-items-center'>
              <ul
                className='list-group text-center d-flex h1 w-100 px-4'
                style={{ cursor: 'pointer' }}
              >
                <li className='list-group-item border-0 border-bottom'>
                  <Link className='text-decoration-none text-dark' to='/' onClick={() => setShowMenu(false)}>
                    HOME
                  </Link>
                </li>
                <li className='list-group-item border-0 border-bottom'>
                  <Link className='text-decoration-none text-dark' to='/add' onClick={() => setShowMenu(false)}>
                    ADD
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Header
