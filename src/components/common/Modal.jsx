import  React from 'react';
import {
    Dialog,
} from "@mui/material"
import { InputBox } from './InputBox.jsx';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const InputModal=({handleClose,string1,string2,handleFormValues,handleSubmit,open})=> {

    const handleCancel = () => {
      handleClose()
    }
  return (
    // <div>
    //   {/* <Button onClick={handleOpen}>Open modal</Button> */}
    //   <Modal
    //     open={open}
    //     onClose={handleClose}
    //     aria-labelledby="modal-modal-title"
    //     aria-describedby="modal-modal-description"
    //   >
    <Dialog open={open} fullWidth={true} maxWidth={"sm"}>
   <InputBox handleCancel={handleCancel} string1={string1} string2={string2} handleFormValues={handleFormValues} handleSubmit={handleSubmit}/>
        </Dialog>
    //   {/* </Modal>
    // </div> */}
  );
}