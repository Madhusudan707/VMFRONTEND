import React, {
  ReactNode,
  useEffect,
  useRef,
  HTMLAttributes,
  useCallback,
} from 'react';
import styles from './Modal.module.scss';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  visible: boolean;
  height?: string;
  onSkip?: () => void;
}

/**
 *
 * Usage:
 *
 *  <button onClick={() => toggleVisible(!visible)}>Open Modal</button>
 *
 * <Modal visible={visible} height="100vh">
 *    <button onClick={() => toggleVisible(!visible)}>Close Modal</button>
 *  </Modal>
 */

const Modal: React.FC<ModalProps> = (props) => {
  const { children, visible, height, className = '', onSkip } = props;
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      (modalRef.current as HTMLDivElement).scrollTop = 0;
    }
  }, []);

  const disableBackgroundScroll = useCallback(() => {
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  }, []);

  const defaultBackgroundScroll = useCallback(() => {
    document.body.style.position = 'inherit';
    document.body.style.width = 'inherit';
  }, []);

  const showModal = useCallback(() => {
    disableBackgroundScroll();

    if (modalRef.current) {
      (modalRef.current as HTMLDivElement).classList.remove(styles.hide);
      (modalRef.current as HTMLDivElement).classList.add(styles.show);
    }
  }, []);

  const hideModal = useCallback(() => {
    defaultBackgroundScroll();

    if (modalRef.current && (modalRef.current as HTMLDivElement).classList) {
      (modalRef.current as HTMLDivElement).classList.add(styles.hide);

      setTimeout(() => {
        if (
          modalRef.current &&
          (modalRef.current as HTMLDivElement).classList
        ) {
          (modalRef.current as HTMLDivElement).classList.remove(styles.show);
        }
      }, 310);
    }
  }, []);

  useEffect(() => {
    if (visible) {
      showModal();
    } else {
      hideModal();
    }

    return () => {
      defaultBackgroundScroll();
    };
  }, [hideModal, showModal, visible]);

  return (
    <div className={styles.modal} ref={modalRef}>
      <div className={styles.overlay}>
        {onSkip && (
          <div
            className={styles.skipButton}
            onClick={onSkip}
            aria-hidden="true"
          >
            skip
          </div>
        )}
      </div>

      <div className={`${styles.modalBody} ${className}`} style={{ height }}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
