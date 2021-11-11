import React from 'react'

import { Modal, Button } from 'react-bootstrap'

import LoaderComponent from './LoaderComonent'

const ModalComponent = ({
  modalVisible,
  setModalVisible,
  day,
  loader,
  saveFunction
}) => {
  console.log(loader);
  return (
    <>
      <Modal show={modalVisible} onHide={() => setModalVisible(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{day.toString()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loader ? (
            <div className="text-center">
              <LoaderComponent />
              <h3>Booking date...</h3>
            </div>
          ) : (
            <p>Are you sure you want to mark this date as booked?</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setModalVisible(false)}>
            Close
          </Button>
          <Button variant='primary' onClick={() => saveFunction()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalComponent
