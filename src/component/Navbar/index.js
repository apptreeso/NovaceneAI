import React, { useState } from "react";
import { Layout, Menu, Avatar } from "antd";
import logo from "../../asset/image/Logo.png";
import { useHistory } from "react-router-dom";
import "./index.scss";

const { Header } = Layout;

export default function Navbars() {
  const [selectedLink, setSelectedLink] = useState("datasets");

  const history = useHistory();

  const handleClick = e => {
    history.push(`/${e.key}`);
    setSelectedLink(e.key);
  };

  return (
    <Header className="header">
      <div className="header_logo">
        <img src={logo} alt="Logo" />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={selectedLink}
        className="header_navbar"
        onClick={handleClick}
      >
        <Menu.Item key="datasets" className="header_navbar_item">
          <span>DATASETS</span>
        </Menu.Item>
        <Menu.Item key="studio" className="header_navbar_item">
          <span>STUDIO</span>
        </Menu.Item>
        <Menu.Item key="stage" className="header_navbar_item">
          <span>STAGE</span>
        </Menu.Item>
      </Menu>
      <div className="header_avatar">
        <Avatar size="small" alt="Avatar" className="header_avatar_content">
          <span>M</span>
        </Avatar>
      </div>
    </Header>
  );
}
