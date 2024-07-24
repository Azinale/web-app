import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";

const ModalCreateUser = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("USER");
  const [preview, setPreview] = useState("");

  const handleUpload = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreview(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        ADD USER
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">User name</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                onChange={(event) => setRole(event.target.value)}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option selected value="TEACHER">
                  Teacher
                </option>
              </select>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Check me out</label>
              </div>
              <div className="col-md-12">
                <label className="form-label">
                  <span class="btn btn-primary btn-file">
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
                {preview ? <img src={preview} /> : <span>preview</span>}
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalCreateUser;
