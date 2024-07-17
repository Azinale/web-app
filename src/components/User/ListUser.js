import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "/home/quy/Documents/testJS/my-app/src/styles/listUser.scss";

const ListUser = () => {
    const [listUser, setListUser] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                let res = await axios.get("https://reqres.in/api/users?page=2");
                setListUser(res && res.data && res.data.data ? res.data.data : []);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    const handleViewDetail = (user) => {
        setTimeout(() => {
            navigate(`/user/${user.id}`);
        }, 1000);
    };

    return (
        <div className="list-user">
            <div className="title">All users:</div>
            <div className="content">
                {listUser && listUser.length > 0 &&
                    listUser.map((item, index) => (
                        <div className="child" key={item.id} onClick={() => handleViewDetail(item)}>
                            {index + 1} - {item.first_name} - {item.last_name}
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default ListUser;
