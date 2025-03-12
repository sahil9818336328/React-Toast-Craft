import React from 'react'
import ToastContainer from './components/ToastContainer'
import { createContext, useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const ToastContext = createContext()

const useToasts = () => {
  return useContext(ToastContext)
}

const ToastProvider = ({
  children,
  position = 'bottom-right',
  containerStyles = {},
  messageStyles = {},
  iconStyles = {},
  closeAfter = 5000,
}) => {
  const [toasts, setToasts] = useState([])

  const addToast = (message, type = 'info') => {
    const id = uuidv4()
    setToasts((prevToasts) => [...prevToasts, { id, message, type }])
  }

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer
        toasts={toasts}
        removeToast={removeToast}
        position={position}
        containerStyles={containerStyles}
        messageStyles={messageStyles}
        iconStyles={iconStyles}
        closeAfter={closeAfter}
      />
    </ToastContext.Provider>
  )
}

export { useToasts }

export default ToastProvider
