import React from 'react'

function Head() {
  return (
    <header className="text-white flex justify-between items-center bg-gradient-to-r from-blue-500 to-black p-10">
        <div >        
            <ul className='flex'>
                <li>About me </li>
                <li> Projects</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Contact me</li>
            </ul>
        </div>
      </header>
  )
}

export default Head