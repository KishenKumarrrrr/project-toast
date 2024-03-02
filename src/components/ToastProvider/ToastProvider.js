import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {

  // List of all toast data
  const [toastData, setToastData] = React.useState([]);

  // Toast data mutation functions
  const addToast = (message, variant) => {
    const data = {
      id: uuidv4(),
      message,
      variant,
    }
    const newToastData = [...toastData, data]
    setToastData(newToastData)
  }

  const removeToast = (toastId) => {
    const newToastData = toastData.filter((toast) => toast.id !== toastId)
    setToastData(newToastData)
  }



  return (
    <ToastContext.Provider
      value={{
        toastData,
        addToast,
        removeToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
