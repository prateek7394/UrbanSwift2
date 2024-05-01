import React from "react";
import { Menu, Dropdown, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";

function DefaultLayout(props) {
  // console.log(props);
  const admin = JSON.parse(localStorage.getItem("admin"));
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(admin)
  // console.log(user)
  {
    if(admin===null && user===null){
      window.location.href = "/";
    }
  }
  const menu = (
    <Menu>
      <Menu.Item>
        {
          user==null? <a href="/admin">Home</a> : <a href="/home">Home</a>
        }
      </Menu.Item>
      <Menu.Item>
        <a href="/userbookings">Bookings</a>
      </Menu.Item>
      {admin == null ? (
        <Menu.Item
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/";
          }}
        >
          <li style={{ color: "orangered" }}>Logout</li>
        </Menu.Item>
      ) : (
        <Menu.Item
          onClick={() => {
            localStorage.removeItem("admin");
            window.location.href = "/";
          }}
        >
          <li style={{ color: "orangered" }}>Logout</li>
        </Menu.Item>
      )}
    </Menu>
  );
  return (
    <div>
      <div className="header bs1">
        <Row gutter={16} justify="center">
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
              <h1>
                <b>
                  <Link to="/" style={{ color: "orangered" }}>
                    UrbanDrift
                  </Link>
                </b>
              </h1>

              {admin == null ? (
                <Dropdown overlay={menu} placement="bottomCenter">
                  <Button>{user.username}</Button>
                </Dropdown>
              ) : (
                <Dropdown overlay={menu} placement="bottomCenter">
                  <Button>{admin.username}</Button>
                </Dropdown>
              )}
            </div>
          </Col>
        </Row>
      </div>
      <div className="content">{props.children}</div>

      <div className="footer text-center">
        <hr />

        <p>Designed and Developed By</p>
        <p>
          <b>APAY</b>
        </p>
      </div>
    </div>
  );
}

export default DefaultLayout;
