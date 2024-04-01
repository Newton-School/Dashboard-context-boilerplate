// src/App.js
import React from 'react'
import { Dashboard } from './components/Dashboard'
import './styles.css'

const App = () => {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  )
}

export default App
