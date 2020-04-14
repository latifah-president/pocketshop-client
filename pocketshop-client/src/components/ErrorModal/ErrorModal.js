import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from "@material-ui/core/Button";
import { mainBtnColor, GreenRadient } from '../../global-styles/styles';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  btn: {
    margin: theme.spacing(2, 0),
    color: "white",
    width: "60%",
    backgroundColor: `${GreenRadient}`,

    "&:hover": {
      backgroundColor: `${mainBtnColor}`,

    }
  }
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
      <h2 id="transition-modal-title">{props.errorTitle}</h2>
      <p id="transition-modal-description">{props.errorMessage}</p>
      <Button type="button" onClick={handleClose} className={classes.btn}>
          Close
        </Button>
          </div>
        </Fade>
       
      </Modal>
    </div>
  );
}