import React, { useState } from "react";
// common custom components
import { Navigation } from "../Navigation";
import { CustomHeader } from "../Header";

import {Assets} from "../Assets";
import {Comparison} from "../Comparison";
import {Dictionary} from "../Dictionary";
import {Exchange} from "../Exchange";
import {Stable} from "../Stable";
// Layout
import { Layout} from "antd";
import "./HomePage.css";
import { Lbitcoin } from "../Lbitcoin";

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
      case 'exchanges':
        return <Exchange />;
      case 'stable':
            return <Stable />;
      case 'lbitcoin':
          return <Lbitcoin />;
    }
  }
  const onHeaderSectionClickHandler = section => {
    setNav(section);
  }
  return(
    <div>
      <Layout>
        <Navigation navigationHandler={navigationHandler} selectedMenu={nav}/>
        <Layout>
          <CustomHeader onHeaderSectionClick={onHeaderSectionClickHandler}/>
          {conditionCmp(nav)}
        </Layout>
      </Layout>
    </div>
  );
}
  
