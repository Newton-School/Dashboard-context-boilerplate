// src/components/WidgetSelector.js
import React, { useContext } from 'react'

export const WidgetSelector = () => {
  return (
    <div className='widget-selector'>
      <label>
        <input type='checkbox' /> Weather
      </label>
      <label>
        <input type='checkbox' /> News
      </label>
      <label>
        <input type='checkbox' /> To-Do List
      </label>
      <label>
        <input type='checkbox' /> Motivational Quote
      </label>
    </div>
  )
}
