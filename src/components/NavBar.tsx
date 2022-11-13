import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center mt-6'>
        <Link to='/'><h1 className="text-2xl font-bold">LGMedia.</h1></Link>
        <div className="flex gap-20">
            <ul className="flex gap-4 items-center">
                <Link to='/teknologi'>Teknologi</Link>
                <Link to='/pangan'>Pangan</Link>
                <Link to='/pertanian'>Pertanian</Link>
            </ul>
            <ul className="flex gap-4 items-center">
                <Link to='/login'>Login</Link>
                <Link to='/register'>Signup</Link>
                <Link to='/write' ><button className="bg-softOrange h-[35px] w-[100px] rounded text-offWhite font-bold">Buat Post</button></Link>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar