import React, { useState } from "react";
import { getAllTeacher } from "../../../services/adminService";
import ModalDelete from "./ModalDelete";
import ModalUpdateTeacher from "./ModalUpdateTeacher";
import ModalCreateUser from "./ModalCreateUser";
import ReactPaginate from "react-paginate";

const TableUser = () => {
    const [listUser, setListUser] = useState([]);

    const fetchList = async () => {
        let response = await getAllTeacher();
        if (response.status === 200) {
            setListUser(response.data.body);
        }
    };

    useState(() => {
        fetchList();
    }, []);

    return (
        <div>
            <ModalCreateUser onUserUpdated={fetchList} />
            <div>ALL USER</div>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">firstName</th>
                        <th scope="col">lastName</th>
                        <th scope="col">email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser.length > 0 ? (
                        listUser.map((item, index) => (
                            <tr key={`users-${index}`}>
                                <th scope="row">{item.id}</th>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>
                                    <ModalDelete user={item} onUserDeleted={fetchList} />
                                    <ModalUpdateTeacher user={item} onUserUpdated={fetchList} />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={'5'}>NOTHING HERE</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <ReactPaginate
                nextLabel="next >"
                onPageChange={() => { }} // Tạm thời bỏ trống
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={1}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

export default TableUser;
