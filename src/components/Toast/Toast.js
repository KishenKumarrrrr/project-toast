import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast(props) {

  const { message, variant, onClose } = props

  const toastVariant = Object.keys(ICONS_BY_VARIANT).includes(variant) ? variant : 'notice'
  const ToastIcon = ICONS_BY_VARIANT[toastVariant]

  return (
    <div className={`${styles.toast} ${styles[toastVariant]}`}>
      <div className={styles.iconContainer}>
        <ToastIcon size={24} /> 
      </div>
      <p className={styles.content}>
        <div class="VisuallyHidden_wrapper">
          error -
        </div>
        Something went wrong! Please contact customer support
        {message}
      </p>
      <button 
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live='off'
        onClick={onClose}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
