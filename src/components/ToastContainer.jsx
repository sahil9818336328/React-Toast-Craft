// src/toast/ToastContainer.js
import React, { useEffect } from 'react'
import Toast from './Toast'

const ToastContainer = ({
  toasts,
  removeToast,
  position,
  containerStyles,
  messageStyles,
  iconStyles,
  closeAfter,
}) => {
  useEffect(() => {
    // For each toast, set a timeout to remove it after 3 seconds
    toasts.forEach((toast) => {
      const timer = setTimeout(() => {
        // Check if the toast still exists in the state before removing it
        if (toasts.find((t) => t.id === toast.id)) {
          removeToast(toast.id) // Remove the toast
        }
      }, closeAfter) // Duration for toast visibility

      // Cleanup the timeout when the toast is removed or the component re-renders
      return () => clearTimeout(timer)
    })
  }, [toasts, removeToast]) // Run this effect when the toasts or removeToast change

  const getPositionClass = (position) => {
    switch (position) {
      case 'bottom-right':
        return 'toast-bottom-right'
      case 'bottom-left':
        return 'toast-bottom-left'
      case 'bottom-center':
        return 'toast-bottom-center'
      case 'top-right':
        return 'toast-top-right'
      case 'top-left':
        return 'toast-top-left'
      case 'top-center':
        return 'toast-top-center'
      default:
        return 'toast-bottom-right' // Default position
    }
  }

  return (
    <div className={`toast-container ${getPositionClass(position)}`}>
      {toasts.map((toast) => (
        <Toast
          containerStyles={containerStyles}
          messageStyles={messageStyles}
          iconStyles={iconStyles}
          key={toast.id}
          id={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  )
}

export default ToastContainer
