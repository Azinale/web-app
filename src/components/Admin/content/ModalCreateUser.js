import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { postCreateUser, postCreateStudent, postCreateCourse, postCreateUser2 } from "../../../services/adminService";
import { toast } from "react-toastify";

const ModalCreateUser = ({ fetchList }) => {
  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState("");
  const [role, setRole] = useState("USER");

  const formRef = useRef(null);
  const imageRef = useRef(null);

  const handleClose = () => {
    setShow(false);
    setPreview("");
    setRole("USER");
  };

  const handleShow = () => setShow(true);

  const handleUpload = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreview(URL.createObjectURL(event.target.files[0]));
      imageRef.current = event.target.files[0];
    }
  };

  const handleSave = async () => {
    if (formRef.current) {
      const form = new FormData(formRef.current);
      let firstName = form.get("firstName");
      let lastName = form.get("lastName");
      let email = form.get("email");
      let username = form.get("username");
      let password = form.get("password");
      let courseName = form.get("courseName");
      let courseId = form.get("courseId");
      let title = form.get("title");
      let teacherId = form.get("teacherId");

      try {
        if (role === "TEACHER") {
          await postCreateUser(firstName, lastName, email);
        } else if (role === "ANOTHER") {
          await postCreateUser2(username, password, email, role);
        } else if (role === "COURSE") {
          await postCreateCourse(courseName, title, teacherId, firstName, lastName, email);
        } else {
          await postCreateStudent(firstName, lastName, courseId, courseName, title);
        }
        fetchList();
        toast.success("User created successfully");
      } catch (error) {
        toast.error("Error creating user");
      }
      handleClose();
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        ADD USER
      </Button>

      <Modal show={show} onHide={handleClose} size="xl" backdrop="static" className="modal-add-user">
        <Modal.Header closeButton>
          <Modal.Title>Create a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form ref={formRef} className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                value={role}
                onChange={(event) => setRole(event.target.value)}
                name="role"
              >
                <option value="USER">User</option>
                <option value="COURSE">Course</option>
                <option value="TEACHER">Teacher</option>
                <option value="ANOTHER">Another</option>
              </select>
            </div>

            {role === "COURSE" && (
              <>
                <div className="col-6">
                  <label className="form-label">Course Name</label>
                  <input type="text" className="form-control" name="courseName" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Title</label>
                  <input type="text" className="form-control" name="title" />
                </div>
                <div className="col-3">
                  <label className="form-label">Teacher ID</label>
                  <input type="number" className="form-control" name="teacherId" />
                </div>
                <div className="col-6">
                  <label className="form-label">Teacher First Name</label>
                  <input type="text" className="form-control" name="firstName" />
                </div>
                <div className="col-6">
                  <label className="form-label">Teacher Last Name</label>
                  <input type="text" className="form-control" name="lastName" />
                </div>
                <div className="col-6">
                  <label className="form-label">Teacher Email</label>
                  <input type="email" className="form-control" name="email" />
                </div>
              </>
            )}

            {role === "ANOTHER" && (
              <>
                <div className="col-6">
                  <label className="form-label">Username</label>
                  <input type="text" className="form-control" name="username" />
                </div>
                <div className="col-6">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" name="email" />
                </div>
                <div className="col-6">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" name="password" />
                </div>
              </>
            )}

            {(role === "USER" || role === "TEACHER") && (
              <>
                <div className="col-md-6">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control" name="firstName" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control" name="lastName" />
                </div>
                {role === "USER" && (
                  <>
                    <div className="col-6">
                      <label className="form-label">Course ID</label>
                      <input type="number" className="form-control" name="courseId" />
                    </div>
                    <div className="col-6">
                      <label className="form-label">Course Name</label>
                      <input type="text" className="form-control" name="courseName" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Title</label>
                      <input type="text" className="form-control" name="title" />
                    </div>
                  </>
                )}
                {role === "TEACHER" && (
                  <div className="col-md-12">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" />
                  </div>
                )}
              </>
            )}

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
                    <input type="file" hidden onChange={handleUpload} />
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

export default ModalCreateUser;
