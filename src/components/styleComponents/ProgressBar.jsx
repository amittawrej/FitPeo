
// Filename - Progress_bar.js
 
import React from 'react'
 
const Progress_bar = ({bgcolor,progress,height}) => {
    
    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 25
      }
     
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'right'
      }
     
   
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span className='text-xs' >2 Task</span>
      </div>
    </div>
    )
}
 
export default Progress_bar;