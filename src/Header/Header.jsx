import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Dropdown, Button, Icon, Input } from "antd";
const { Header } = Layout;

const desktop = window.innerWidth > 1000;
const desktopWide = window.innerWidth > 1330;
import { useHeaders } from "../hooks";

const numberWithCommas = x => {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

const innerMenu = () => {
  const username = JSON.parse(localStorage.getItem("user")).email;

  return (
    <Menu>
      {!desktop && (
        <Menu.Item key="0">
          <Link to="/" style={{ margin: 3 }}>
            {username}
          </Link>
        </Menu.Item>
      )}
      <Menu.Item key="1">
        <Link to="/login" style={{ margin: 3 }}>
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export const CustomHeader = props => {
  const headers = useHeaders();
  return (
    <Header
      style={{
        lineHeight: "5px",
        background: "black",
        display: "flex",
        height: "auto",
        paddingBottom: '20px',
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <div
        style={{
          fontSize: "9pt",
          paddingRight: 20,
          justifyContent: "space-between",
          marginTop: "10px",
          width: "100%"
        }}
      >
        <div className="row" style={{marginTop:'15px', fontSize:'9pt', fontWeight: "500", justifyContent: 'space-around', lineHeight: 1.5}}>
            <div className="col-sm-2 col-md-2 col-lg-2">
              <span style={{color: '#A1A1A1'}}>Assets&nbsp;&nbsp;</span>
              <span style={{ fontWeight: "700", color: 'white'}}>
                {" "}
                {headers.dtra_active_assets}
              </span>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <span style={{color: '#A1A1A1'}}>
                Marketcap  
              </span>
              <span style={{color: 'white'}}>
              &nbsp;&nbsp;${numberWithCommas(
                  parseFloat(headers.marketcap_dtra_active).toFixed(0)
                )}
              </span>
              <span style={{ color: "#EF5350" }}>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
                  {numberWithCommas(
                  parseFloat(headers.marketcap_change_dtra_active).toFixed(2)
                )}
                % 24h)
              </span>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <span style={{color: '#F4F4F4'}}> Dominance : </span>
              <span style={{color: '#A1A1A1' }}>&nbsp;&nbsp;&nbsp;&nbsp;BTC</span>
              <span style={{ color: "white" }}>
                &nbsp;{parseFloat(headers.dominance_btc).toFixed(2)}%{" "}
              </span>
              <span style={{color: '#A1A1A1' }}> &nbsp;&nbsp;&nbsp;ETH</span>
              <span style={{ color: "white" }}>
                &nbsp;{parseFloat(headers.dominance_eth).toFixed(2)}%{" "}
              </span>
              <span style={{color: '#A1A1A1' }}> &nbsp;&nbsp;&nbsp;OTHERS{"  "}</span>
              <span style={{ color: "white" }}>
                &nbsp;{parseFloat(headers.dominance_others).toFixed(2)}%
              </span>
            </div>
          </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end"
        }}
      >
        <Dropdown overlay={innerMenu()} trigger={["click"]}>
          <Button
            type="primary"
            shape="circle"
            icon="setting"
            style={{
              marginTop: 16,
              color: 'white',
              background: "transparent",
              border: "white",
              boxShadow: "none"
            }}
          />
        </Dropdown>
      </div>
    </Header>
  );
};
