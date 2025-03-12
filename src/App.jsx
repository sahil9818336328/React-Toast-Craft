import React from 'react'
import { useToasts } from './ToastProvider'

const App = () => {
  const { addToast } = useToasts()

  return (
    <div className='container'>
      <h1>Toast Notifications</h1>
      <button onClick={() => addToast('Success notification!', 'success')}>
        Show Success Toast
      </button>
      <button onClick={() => addToast('Error notification!', 'error')}>
        Show Error Toast
      </button>
      <button onClick={() => addToast('Information notification!', 'info')}>
        Show Info Toast
      </button>
      <button onClick={() => addToast('Warning notification!', 'warning')}>
        Show Warning Toast
      </button>
    </div>
  )
}

export default App
