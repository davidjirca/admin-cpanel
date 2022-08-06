import React from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import HouseSharpIcon from '@mui/icons-material/HouseSharp';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {

    const { dispatch } = useContext(DarkModeContext);

  return (
      <div className='sidebar'>
          <div className="top">
              <Link to="/" style={{ textDecoration: "none" }}>
                  <span className="logo">Logo</span>
              </Link>
          </div>
          <hr/>
          <div className="center">
              <ul>
                  <p className="title">MAIN</p>
                  <li>
                      <DashboardIcon  className="icon"/>
                      <span>Dashboard</span>
                  </li>
                  <p className="title">LISTS</p>
                  <Link to="/users" style={{ textDecoration: "none" }}>
                  <li>
                      <PersonOutlinedIcon  className="icon"/>
                      <span>Users</span>
                  </li>
                  </Link>
                  <Link to="/products" style={{ textDecoration: "none" }}>
                      <li>
                          <HouseSharpIcon className="icon" />
                          <span>Products</span>
                      </li>
                  </Link>
                  <li>
                      <CreditCardIcon className="icon"/>
                      <span>Orders</span>
                  </li>
                  <li>
                      <LocalShippingIcon className="icon"/>
                      <span>Delivery</span>
                  </li>
                  <p className="title">USEFUL</p>
                  <li>
                      <AssessmentIcon className="icon"/>
                      <span>Statistics</span>
                  </li>
                  <li>
                      <NotificationsNoneOutlinedIcon className="icon"/>
                      <span>Notifications</span>
                  </li>
                  <p className="title">SERVICE</p>
                  <li>
                      <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                      <span>System Health</span>
                  </li>
                  <li>
                      <ContentPasteOutlinedIcon className="icon"/>
                      <span>Logs</span>
                  </li>
                  <li>
                      <SettingsApplicationsSharpIcon className="icon"/>
                      <span>Settings</span>
                  </li>
                  <p className="title">USER</p>
                  <li>
                      <AccountCircleOutlinedIcon className="icon"/>
                      <span>Profile</span>
                  </li>
                  <li>
                      <LogoutOutlinedIcon className="icon"/>
                      <span>Logout</span>
                  </li>
              </ul>
          </div>
          <div className="bottom">
              <div
                  className="colorOption"
                  onClick={() => dispatch({ type: "LIGHT" })}
              ></div>
              <div
                  className="colorOption"
                  onClick={() => dispatch({ type: "DARK" })}
              ></div>
          </div>
      </div>
  )
}

export default Sidebar;