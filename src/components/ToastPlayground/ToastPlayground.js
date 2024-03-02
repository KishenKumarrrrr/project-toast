import React from 'react';

import Button from '../Button';
import Toast from '../Toast/Toast';
import { ToastContext } from '../ToastProvider/ToastProvider';
import ToastShelf from '../ToastShelf/ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const [toastVariant, setToastVariant] = React.useState('notice');
  const [toastMessage, setToastMessage] = React.useState('')

  const { toastData, removeToast, addToast, removeAllToasts } = React.useContext(ToastContext)


  React.useEffect(() => {

    const handleEscapeDown = (e) => {
      if (e.code === 'Escape') {
        removeAllToasts()
      }
    }

    document.addEventListener('keydown', handleEscapeDown)

    return () => {
      document.removeEventListener('keydown', handleEscapeDown)
    }
  }, [toastData])

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toastData={toastData} deleteToast={removeToast}/>

      <form 
        className={styles.controlsWrapper}
        onSubmit={(event) => {
                event.preventDefault()
                addToast(toastMessage, toastVariant)
                setToastMessage('')
                setToastVariant('notice')
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
