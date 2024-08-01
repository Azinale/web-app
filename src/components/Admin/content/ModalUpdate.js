import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { postCreateUser, postCreateStudent, postCreateCourse, postUpdate, postUpdateTeacher } from "../../../services/adminService"
import { toast } from "react-toastify";

const ModalUpdate = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [image, setImage] = useState("");
    const [role, setRole] = useState("USER");
    const [preview, setPreview] = useState("");
    const [title, setTitle] = useState("");
    const [courseId, setCourseId] = useState("")
    const [courseName, setCourseName] = useState("")
    const [teacherId, setTeacherID] = useState("")
    const [updateUser, setUpdateUser] = useState({})

    const data = props.props
    const handleClose = () => {
        setShow(false)
        setEmail("");
        setCourseId("");
        setCourseName("")
        setfirstName("");
        setlastName("")
        setTitle("")
        setTeacherID("")

    };

    const handleShow = (user) => {
        console.log(data.role)
        setShow(true)
        setUpdateUser(user)

    };

    const handleUpload = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreview(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        }
    };


    const handleSave = async () => {
        await postUpdateTeacher(data.id, data.firstName, data.lastName, data.email);
        props.onUpdate();
        handleClose()
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
                className="modal-add-user"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        {role === "COURSE" ? (
                            <>
                                <div className="col-6">
                                    <label className="form-label">Course name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={courseName}
                                        onChange={(event) => setCourseName(event.target.value)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="name"
                                        className="form-control"
                                        value={title}
                                        onChange={(event) => setTitle(event.target.value)}
                                    />
                                </div>
                                <div className="col-3">
                                    <label className="form-label">Teacher ID</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={teacherId}
                                        onChange={(event) => setTeacherID(event.target.value)}
                                    />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Teacher first name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(event) => setfirstName(event.target.value)}
                                    />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Teacher last name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(event) => setlastName(event.target.value)}
                                    />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Teacher email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </div>
                            </>
                        ) : role === "ANOTHER" || role === "USER" || role === "ADMIN" ? (
                            <>
                                <div className="col-6">
                                    <label className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={username}
                                        onChange={(event) => setUsername(event.target.value)}
                                        placeholder={data.username}
                                    />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        // onChange={(event) => setEmail(event.target.value)}
                                        placeholder={data.email}
                                    />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        // onChange={(event) => setPassword(event.target.value)}
                                        placeholder='_____________________________________'
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="col-md-6">
                                    <label className="form-label">First name</label>
                                    <input
                                        type="name"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(event) => setfirstName(event.target.value)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Last name</label>
                                    <input
                                        type="name"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(event) => setlastName(event.target.value)}
                                    />
                                </div>
                                {role === "TEACHER" ? (
                                    <div className="col-md-12">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                        />
                                    </div>
                                ) : (
                                    <>
                                        <div className="col-6">
                                            <label className="form-label">Course ID</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={courseId}
                                                onChange={(event) => setCourseId(event.target.value)}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <label className="form-label">Course name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={courseName}
                                                onChange={(event) => setCourseName(event.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Title</label>
                                            <input
                                                type="name"
                                                className="form-control"
                                                value={title}
                                                onChange={(event) => setTitle(event.target.value)}
                                            />
                                        </div>
                                    </>
                                )}
                            </>
                        )}


                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select
                                className="form-select"
                                value={data.role}
                                onChange={(event) => setRole(event.target.value)}
                            >
                                <option value={data.role}>{data.role}</option>
                                {/* <option value="USER">User</option>
                                <option value="COURSE">Course</option>
                                <option value="TEACHER">Teacher</option> */}
                            </select>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label">Check me out</label>
                            </div>
                            <div className="col-md-12">
                                <label className="form-label">
                                    <span className="btn btn-primary btn-file">
                                        <FcPlus size={"2em"} />
                                        Choose image{" "}
                                        <input
                                            type="file"
                                            hidden
                                            onChange={(event) => handleUpload(event)}
                                        />
                                    </span>
                                </label>
                            </div>
                            <div className="col-md-12 image-preview">
                                {preview ? <img src={preview} alt="preview" /> : <span>preview</span>}
                            </div>
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

export default ModalUpdate;
