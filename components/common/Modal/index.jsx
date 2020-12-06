import React from 'react'
import { Modal } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default function modal(props) {
  return (
      <Modal
        open={props.openModal}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
      <div className="modal-styles">
        <HighlightOffIcon onClick={props.handleClose} />
        <iframe src="https://player.vimeo.com/video/259411563" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
    </Modal>
  )
}
