import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/image/cong-nghe-xu-ly-du-lieu-hinh-anh-y-te.jpg";
import { connect } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";
import "../../styles/global.scss";
import video from "../../assets/video/hero.webm";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

const Home = (props) => {
  // console.log(props);
  // let listUser = props.data;
  // const navigate = useNavigate();

  // const handleDeleteUser = (item) => {
  //   props.deleteUser(item);
  // };
  // const handleAddUser = () => {
  //   props.addUser();
  // };
  return (
    <>
      <div className="Homepage">
        <video autoPlay muted loop className="w-full">
          <source src={video} type="video/mp4" />
        </video>
        <div className="home-content">
          <div className="home-text">The #1 web for course creators</div>
          <div className="home-text-explain">
            From digital products to marketing and selling tools, get everything
            you need to build a profitable business, all in one scalable
            platform.
          </div>

          <div className="home-text-btn">
            <Button variant="outline-success">Subcribe</Button>
          </div>
        </div>
      </div>

      {/* <div>
        {listUser &&
          listUser.length > 0 &&
          listUser.map((item, index) => {
            return (
              <div key={item.id}>
                {index + 1} - {item.name}
                <> </>
                <span onClick={() => handleDeleteUser(item)}> x </span>
                <> </>
              </div>
            );
          })}
        <button onClick={() => handleAddUser()}>+</button>
      </div> */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (userDel) =>
      dispatch({ type: "DELETE_USER", payload: userDel }),
    addUser: () => dispatch({ type: "ADD" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
