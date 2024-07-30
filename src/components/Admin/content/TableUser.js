import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { getAllUser } from "../../../services/adminService";

const TableUser = (props) => {
    const [listUser, setListUser] = useState()

    useEffect(() => {
        fetchList()
    }, [])

    const fetchList = async () => {
        let response = await getAllUser();
        // console.log(response.data.EC)
        if (response.data.EC === 0) {
            setListUser(response.data.DT)
            console.log(listUser)
        }
    }
    return (
        <>
            <div>ALL USER</div>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">username</th>
                        <th scope="col">email</th>
                        <th scope="col">role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 && listUser.map((item, index) => {
                        return (
                            <tr key={`users-${index}`}>
                                <th scope="row">{item.id}</th>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                                <Button variant="outline-danger mx-3">DELETE</Button>{' '}
                                <Button variant="outline-primary">EDIT</Button>{' '}
                            </tr>
                        )

                    })}
                    {listUser && listUser.length === 0 &&
                        <tr><td colSpan={'4'}>NOTHING HERE</td></tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default TableUser;