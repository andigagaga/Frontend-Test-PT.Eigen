import React from "react";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

export default function Navbar() {
  return (
    <Header>
      <div className="logo" />
      <Menu mode="horizontal" defaultSelectedKeys={["1"]} style={{ background: "none" }}>
        <Menu.Item key="1" style={{ flex: "1", textAlign: "center" }}>
          <Link to="/"><span style={{ fontFamily: "sans-serif", fontSize: "20px" }}>ARTICLES</span></Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}
