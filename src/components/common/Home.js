import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/image/cong-nghe-xu-ly-du-lieu-hinh-anh-y-te.jpg';
import { connect } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";

const Home = (props) => {
    console.log(props)
    let listUser = props.data
    const navigate = useNavigate();

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         navigate('/todo');
    //     }, 5000);

    //     // Cleanup the timer if the component is unmounted before the timeout completes
    //     return () => clearTimeout(timer);
    // }, [navigate]);

    const handleDeleteUser = (item) => {
        props.deleteUser(item)
    }
    const handleAddUser = () => {
        props.addUser();
    }
    return (
        <>
            <div>
                WELCOME TO THE WEBSITE!!!
            </div>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <div>
                {listUser && listUser.length > 0 &&
                    listUser.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {index + 1} - {item.name}<> </><span onClick={() => handleDeleteUser(item)}> x </span><> </>
                            </div>
                        )
                    }
                    )
                }
                <button onClick={()=> handleAddUser()}>+</button>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        deleteUser: (userDel) => dispatch({ type: 'DELETE_USER', payload: userDel }),
        addUser: ()=> dispatch({type:'ADD'})
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
