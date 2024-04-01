// src/components/Dashboard.js
import React, { useContext } from 'react'
import { WidgetSelector } from './WidgetSelector'
import { WeatherWidget } from './WeatherWidget'
import { NewsWidget } from './NewsWidget'
import { TodoListWidget } from './TodoListWidget'
import { QuoteWidget } from './QuoteWidget'

export const Dashboard = () => {
  return (
    <div className='dashboard'>
      <WidgetSelector />
    </div>
  )
}
