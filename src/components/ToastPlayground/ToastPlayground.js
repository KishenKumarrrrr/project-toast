import React from 'react';

import Button from '../Button';
import Toast from '../Toast/Toast';
import ToastShelf from '../ToastShelf/ToastShelf';

import styles from './ToastPlayground.module.css';
import { v4 as uuidv4 } from 'uuid';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const [toastVariant, setToastVariant] = React.useState('notice');
  const [toastMessage, setToastMessage] = React.useState('')
  const [toastData, setToastData] = React.useState([]);

  const deleteToast = (toastId) => {
    const newToastData = toastData.filter((toast) => toast.id !== toastId)
    setToastData(newToastData)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toastData={toastData} deleteToast={deleteToast}/>

      <form 
        className={styles.controlsWrapper}
        onSubmit={(event) => {
                event.preventDefault()
                const data = {
                  id: uuidv4(),
                  message: toastMessage,
                  variant: toastVariant,
                }
                setToastMessage('')
                setToastVariant('notice')
                const newToastData = [...toastData, data]
                setToastData(newToastData)
              }}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea 
            id="message" 
            className={styles.messageInput} 
            value={toastMessage}
            onChange={(event) => setToastMessage(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((option) =>
              <label key={option} htmlFor={`variant-${option}`}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={toastVariant === option}
                  onChange={event => {
                    setToastVariant(event.target.value)
                  }}
                />
              {option}
            </label>
            )}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button type='submit'>
              Pop Toast!
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
