import React, { useEffect, useState } from "react";
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50%',
    },
  };
  
function ModalElement({ modalIsOpen, closeModal, modalInfo, editItem, removeItem }) {

    useEffect(() => {
    }, []);

    if (modalInfo == null) {
      return null;
    }

    return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Product Informtion"
      >
        <div className="container-fluid" style={{ position: 'relative', }}>
          <div className="row">
            <div className="col-md-5">
              <img src={modalInfo.image} style={{ width: '100%', }} />
            </div>
            <div className="col-md-7" style={{ display: 'flex', alignItems: 'center', }}>
              <div className="container-fluid">
                <div className="row">
                  <h4 style={{ color: '#665eff', }}>{modalInfo.name}</h4>
                </div>
                <div className="row">
                  <p style={{ color: 'lightGray', }}>{modalInfo.description}</p>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p>{`${modalInfo.Qte} Unité${modalInfo.Qte > 1 ? 's' : ''}`}</p>
                  </div>
                  <div className="col-md-6">
                    <p style={{ color: '#665eff', }}>{modalInfo.price} Dhs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span style={{ position: 'absolute', top: '-15px', right: '-15px', width: '40px', height: '40px', backgroundColor: '#665eff', color: 'white', fontWeight: 'bold', fontSize: '19px', borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', }} onClick={() => { editItem(modalInfo); }}>
              <i className="fa fa-pencil" aria-hidden="true"></i>
          </span>
          <span style={{ position: 'absolute', top: '-15px', right: '30px', width: '40px', height: '40px', backgroundColor: 'red', color: 'white', fontWeight: 'bold', fontSize: '19px', borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', }} onClick={() => { removeItem(modalInfo); }}>
              <i className="fa fa-trash" aria-hidden="true"></i>
          </span>
        </div>
      </Modal>
    )
};

export default ModalElement;