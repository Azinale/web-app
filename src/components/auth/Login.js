import Button from "react-bootstrap/esm/Button"
import "../../styles/Login.scss"
import { useState } from "react"
import { LoginAPI } from "../../utils/LoginAPI"
import { toast, ToastContainer } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    // const dispatch = useDispatch()




    const handleLogin = async () => {
        try {
            let response = await LoginAPI(email, password)
            // console.log(response.data.accessToken)
            if (response && response.data.accessToken) {
                toast.success("Log in");
                localStorage.setItem("token", response.data.accessToken)
                console.log(localStorage.token)
                setTimeout(() => {
                    navigate("/")
                }, 1000);
            }
        } catch (error) {
            toast.error("Check User Name or Password again")
        }


    }
    return (
        <div className="login-container">
            <div className="header">

                <div className="signup">
                    <span>You don'n have account?</span>
                    <Button variant="outline-success mx-2">Sign up</Button>
                </div>

            </div>
            <div className="title col-4 mx-auto">
                <h1>Login</h1>
            </div>
            <div className="welcome col-4 mx-auto">
                <span> Let me know who you are!</span>
            </div>
            <div className="content-form col-3 mx-auto">
                <div className="form-group">
                    <label>username</label>
                    <input type={"text"} className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type={"password"} className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />

                </div>
                <span className="forgot">Forgot your password?
                </span>
                <div className="btn-submit"><Button variant="dark" onClick={() => {
                    handleLogin()
                }}>
                    Login
                </Button>
                </div>




            </div>
            <div className="btn-home"><Button variant="outline-secondary" onClick={() => {
                navigate("/")
            }}>
                Home
            </Button>
            </div>
            <ToastContainer>
                position="top-right" autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick rtl={false}
                pauseOnFocusLoss draggable pauseOnHover theme="light" transition: Bounce
            </ToastContainer>
        </div>
    )
}

export default Login