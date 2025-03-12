import React from 'react'
import { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa6'
import { MdError } from 'react-icons/md'
import { IoWarning } from 'react-icons/io5'
import { TbInfoTriangleFilled } from 'react-icons/tb'

const Toast = ({
  message,
  type,
  onClose,
  containerStyles,
  messageStyles,
  iconStyles,
  id,
}) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Trigger the show effect after the component is mounted
    setShow(true)
  }, [])

  const toastTypes = {
    success: { backgroundColor: '#28a745', icon: <FaCheck /> },
    error: { backgroundColor: '#dc3545', icon: <MdError /> },
    info: { backgroundColor: '#17a2b8', icon: <TbInfoTriangleFilled /> },
    warning: { backgroundColor: '#ffc107', icon: <IoWarning /> },
  }

  return (
    <div
      className={`toast ${show ? 'show' : ''}`}
      style={{ ...toastTypes[type], ...containerStyles }}
    >
      {toastTypes[type].icon}
      <span style={{ ...messageStyles }} className='toast-message'>
        {message}
      </span>

      <MdClose
        style={{ ...iconStyles }}
        className='close-btn'
        onClick={() => onClose(id)}
      />
    </div>
  )
}

export default Toast
