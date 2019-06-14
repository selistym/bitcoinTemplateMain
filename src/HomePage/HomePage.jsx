import React, { useState } from "react";
// common custom components
import { Navigation } from "../Navigation";
import { CustomHeader } from "../Header";

import {Assets} from "../Assets";
import {Comparison} from "../Comparison";
import {Dictionary} from "../Dictionary";
import {Exchange} from "../Exchange";

// Layout
import { Layout} from "antd";
import "./HomePage.css";

export const HomePage = () => {
  const [nav, setNav] = useState('assets');  
  const navigationHandler = nav => {
    setNav(nav);
  }
  const conditionCmp = nav => {
    switch(nav){
      case 'assets':
        return <Assets />;        
      case 'compare':
        return <Comparison />;        
      case 'dictionary':
        return <Dictionary />;
      case 'exchange':
        return <Exchange />;
      default:
        return <Assets />;        
    }
  }
  return(
    <div>
      <Layout>
        <Navigation navigationHandler={navigationHandler}/>
        <Layout>
          <CustomHeader />
          {conditionCmp(nav)}
        </Layout>
      </Layout>
    </div>
  );
}
  
