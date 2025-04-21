import React from 'react';
import { Dialog, DialogContent } from '@mui/material';
import { LoginForm } from './LoginForm';

interface ModalLoginFormProps {
  open: boolean;
  onClose: () => void;
}

export const ModalLoginForm: React.FC<ModalLoginFormProps> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
    >
      <DialogContent>
        <LoginForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};
