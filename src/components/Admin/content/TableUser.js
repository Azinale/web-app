import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { getAllUser } from "../../../services/adminService";
import ModalDelete from "./ModalDelete";
import ReactPaginate from "react-paginate";
import ModalUpdate from "./ModalUpdate";

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
                                <ModalDelete props={item} />
                                <ModalUpdate props={item} />
                            </tr>
                        )

                    })}
                    {listUser && listUser.length === 0 &&
                        <tr><td colSpan={'4'}>NOTHING HERE</td></tr>
                    }
                </tbody>
            </table>
            <>

                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={3}
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
            </>
        </>
    )
}

export default TableUser;