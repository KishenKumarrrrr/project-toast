import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf(props) {

  const { toastData, deleteToast } = props;

  return (
    <ol className={styles.wrapper}>
      {toastData.map((toast) =>
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast 
            variant={toast.variant} 
            message={toast.message}
            onClose={() => deleteToast(toast.id)}
          />
        </li>
      )}
    </ol>
  );
}

export default ToastShelf;
