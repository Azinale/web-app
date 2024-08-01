import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postUpdateTeacher } from "../../../services/adminService";
import { toast } from "react-toastify";

const ModalUpdateTeacher = ({ user, onUserUpdated }) => {
    const [firstName, setFirstName] = useState(user.firstName || "");
    const [lastName, setLastName] = useState(user.lastName || "");
    const [email, setEmail] = useState(user.email || "");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSave = async () => {
        await postUpdateTeacher(user.id, firstName, lastName, email);
        onUserUpdated(); // Gọi callback để cập nhật lại danh sách
        handleClose();
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                EDIT
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">First name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Last name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalUpdateTeacher;
