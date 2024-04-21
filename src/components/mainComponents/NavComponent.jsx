
import React, { useState } from 'react'

const NavComponent = () => {
  const [color, setColor] = useState(null)
  const nav=['Overview','Client','Update','Budget','Users','Activity','Settings','Logs'];
  const navbar=(index)=>{
    setColor(index);
  }
  return (
    <div className='w-[59vw] h-[9vh]  shadow-xl p-1 rounded-xl mb-2 bg-white'>
      <div className='flex justify-between p-3'>
      {nav.map((item, index) => (
         <p
         key={index}
         className={`font-semibold hover:text-pink-500 ${index === color ? 'text-pink-500 bg-pink-100 p-1 rounded-lg' : 'text-black'}`}
         onClick={() => navbar(index)}
       >{item}</p>
        ))}

      </div>
      
    </div>
    
  )
}

export default NavComponent