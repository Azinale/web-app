import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postDeleteTeacher } from '../../../services/adminService';
import { toast } from 'react-toastify';

const ModalDelete = ({ user, onUserDeleted }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async () => {
        let response = await postDeleteTeacher(user.id);
        if (response && response.status === 200) {
            toast.success("User deleted");
            onUserDeleted(); // Gọi callback để cập nhật lại danh sách
            handleClose();
        } else {
            toast.error("Something went wrong");
            handleClose();
        }
    };

    return (
        <>
            <Button variant="outline-danger mx-3" onClick={handleShow}>
                DELETE
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete user </Modal.Title>
                </Modal.Header>
                <Modal.Body>You are deleting user with email: <b>{user.email}</b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalDelete;
