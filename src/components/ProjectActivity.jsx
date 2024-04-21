import React from 'react'
import FinanceApp from './mainComponents/FinanceApp'
import AssignedUsers from './mainComponents/AssignedUsers'
import NavComponent from './mainComponents/NavComponent'
import Container from './mainComponents/Container'
const ProjectActivity = () => {
  return (
    <div className='flex m-1'>
        <div>
<FinanceApp/>
<AssignedUsers/>
        </div>
        <div>
<NavComponent/>
<Container/>
        </div>
    </div>
  )
}

export default ProjectActivity
