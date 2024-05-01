
import React from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AOS from 'aos';
import Spinner from '../components/Spinner';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const profile = () => {
  return (
    <div className="profile">
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={16} style={{ position: "relative" }}>
          <img
            className="w-100"
            data-aos="slide-left"
            data-aos-duration="1500"
            src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          />
          <h1 className="profile-logo">UrbanDrift</h1>
        </Col>
        <div
          style={{
            height: "300px",
            width: "300px",
            paddingTop: "72px",
            backgroundColor: "#1F1F1F",
            // boxSizing: "border-box",
            // // margin: 0;
            // // padding: 0;
            // color: "rgba(0, 0, 0, 0.85)",
            // fontSize: "14px",
            // fontVariant: "tabular-nums",
            // lineHeight: "1.5715",
            // listStyle: "none",
            // fontFeatureSettings: "tnum",
          }}
        >
          <h1 style={{ color: "white" }}>Login as:</h1>
          <Link to="/login">
            <button  className="btn2 ">User</button>
          </Link>
          <Link to="/adminlogin">
            <button className="btn2">Admin</button>
          </Link>
        </div>
      </Row>
    </div>
  );
};

export default profile;

