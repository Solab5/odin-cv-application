import { useState } from 'react'

import './App.css'
import GeneralInfo from './components/GeneralInfo'
import EducationInfo from './components/education'
import ExperienceInfo from './components/PracticalExperience'

function App() {
  

  return (
    <div>
     <GeneralInfo />
     <EducationInfo />
     <ExperienceInfo />
    </div>
  )
}

export default App
