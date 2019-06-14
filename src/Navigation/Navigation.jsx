import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Layout} from 'antd';
const { SubMenu }  = Menu;
const { Sider } = Layout;

import logo from './main_logo.png';
import "./Navigation.css";
const desktop = window.innerWidth > 1000;

export const Navigation = React.memo(({navigationHandler}) => {
  const username = JSON.parse(localStorage.getItem('user')).email;
  const onSelectNav = (item) => {
    navigationHandler(item.key);
  }
  
  return (
    <Sider style={{ minHeight: '100vh', background: '#252525' }} breakpoint="lg">{console.log('render-menu')}
      <div style={{color:'white', height: 32, marginTop: 16, marginBottom: 50, textAlign: 'center' }}>
        <Link to="/">
          <img src={logo} style={{ width: '90%' }} />
        </Link>
      </div>
      { desktop && <div style={{color:'white', height: 32, marginBottom: 5, textAlign: 'center' }}>{username}</div> }
      <div style={{color:'white', height: 20, textAlign: 'center' }}>• • •</div>
      <hr style={{ height: 1, color: '#3f3f3f', background: '#3f3f3f', border: 'none' }}/>
      <Menu 
        theme="dark" 
        mode="inline"
        style={{ background: '#252525' }}
        defaultSelectedKeys={['assets']}
        defaultOpenKeys={['sub0']}
        onSelect={onSelectNav}
        >
          <SubMenu
            key="sub0"
            title={
              <span>
                <Icon type="caret-right" />
                <span>MARKETS</span>
              </span>
            }
          >
            <Menu.Item key="assets">              
              <Icon type="right-circle" />
              <span>ASSETS</span>              
            </Menu.Item>
            <Menu.Item key="exchanges">              
              <Icon type="right-circle" />
              <span>EXCHANGES</span>              
            </Menu.Item>
            <Menu.Item key="icoieos">              
              <Icon type="right-circle" />
              <span>ICOS/IEOS</span>              
            </Menu.Item>
            <Menu.Item key="stablecoins">              
              <Icon type="right-circle" />
              <span>STABLECOINS</span>              
            </Menu.Item>
            <Menu.Item key="localbitcoins">              
              <Icon type="right-circle" />
              <span>LOCALBITCOINS</span>              
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="networks">
            <Icon type="caret-right" />
            <span>NETWORKS</span>            
          </Menu.Item>          
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="caret-right" />
                <span>TOOLS</span>
              </span>
            }            
          >
            <Menu.Item key="compare">              
              <Icon type="right-circle" />
              <span>COMPARE</span>
            </Menu.Item>
            <Menu.Item key="liquidity">              
              <Icon type="right-circle" />
              <span>LIQUIDITY</span>              
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="projections">            
            <Icon type="caret-right" />
            <span>PROJECTIONS</span>            
          </Menu.Item>
          <Menu.Item key="alerts">            
            <Icon type="caret-right" />
            <span>ALERTS</span>            
          </Menu.Item>
          <Menu.Item key="dictionary">            
            <Icon type="caret-right" />
            <span>DICTIONARY</span>            
          </Menu.Item>
      </Menu>
    </Sider>
  );
});