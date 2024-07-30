import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postDeleteUser } from '../../../services/adminService';
import { toast } from 'react-toastify';

const ModalDelete = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleDelete = async () => {
        let del = await postDeleteUser(props.props.id)
        if (del && del.status === 200) {
            toast.success("user deleted")
            handleClose()
        } else {
            toast.error("something wrong")
            handleClose()
        }
    }
    return (
        <>
            <Button variant="outline-danger mx-3" onClick={handleShow}>
                DELETE
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete user </Modal.Title>
                </Modal.Header>
                <Modal.Body>You are deleting user with email:  <b>{props.props && props.props.email ? props.props.email : ""}</b> </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => handleDelete()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDelete;