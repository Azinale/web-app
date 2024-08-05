import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postUpdateTeacher } from "../../../services/adminService";
import { toast } from "react-toastify";

const ModalUpdateTeacher = ({ user, fetchList }) => {
    const [show, setShow] = useState(false);
    const formRef = useRef(null);
    //check xem component render mấy lần 



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSave = async () => {
        if (formRef.current) {
            const form = new FormData(formRef.current);
            const firstName = form.get("firstName");
            const lastName = form.get("lastName");
            const email = form.get("email");

            await postUpdateTeacher(user.id, firstName, lastName, email);
            fetchList(); // Gọi callback để cập nhật lại danh sách
            handleClose();
        }
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                EDIT
            </Button>

            <Modal show={show} onHide={handleClose} size="xl" backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Update user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form ref={formRef} className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">First name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="firstName"
                                defaultValue={user.firstName}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Last name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="lastName"
                                defaultValue={user.lastName}
                            />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                defaultValue={user.email}
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
