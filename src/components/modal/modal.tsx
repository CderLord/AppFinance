import * as React from 'react';
import Modal from '@mui/material/Modal';
import "./floating.style.css"

export type TBasicModal = {
  children: React.ReactNode;
  onClose: () => void;
  open: boolean;
}


export const BasicModal = ({ children,onClose, open }: TBasicModal) => {


  return (

    <Modal className='budget-modal'
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        {children}
      </>

    </Modal>

  );
}
