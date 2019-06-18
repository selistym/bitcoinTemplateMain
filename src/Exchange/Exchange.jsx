import React, { useState, useEffect, Fragment} from "react";
// common custom components
import { Layout } from "antd";
// custom hook
import { useExchanges } from "../hooks";
// react-table
import ReactTable from "react-table";
import { CustomTableHeader } from "../CustomTableHeader";
import Img from "react-image";
import "./Exchange.css";

const loading = require("../_helpers/loading.gif");
const { Content } = Layout;

const numberWithCommas = x => {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

const numberWith6decimals = x => {
  if (parseFloat(x).toFixed(6) != parseFloat(x)) {
    return parseFloat(x).toFixed(6);
  }
  return x;
};

const numberWith4decimals = x => {
  if (parseFloat(x).toFixed(4) != parseFloat(x)) {
    return parseFloat(x).toFixed(4);
  }
  return x;
};

const numberWith2decimals = x => {
  if (parseFloat(x).toFixed(2) != parseFloat(x)) {
    return parseFloat(x).toFixed(2);
  }
  return x;
};

export const Exchange = () => {
  const currency_sign = ["$", "Ƀ", "Ξ"];
  const currency_letter = ["usd", "btc", "eth"];  

  const [coins, toCoins] = useState([]);
  const [currency, setCurrency] = useState("0");
  const fetched = useExchanges();
  
  useEffect(() => {
    toCoins(fetched);
  }, [fetched]);

  // sort coins by mc_rank
  coins.sort(function(a, b) {
    return a.mc_rank - b.mc_rank;
  });

  const coinColumns = [
    {
      Header: () => <CustomTableHeader title={"Exchange name"} />,
      accessor: "lb_currency_name",
      Cell: row => (
        <Fragment>
          <div className="tablehead">
            <Img src={row.row.img_url} width="20px" height="20px" />{" "}
            {row.row.lb_currency_name}
          </div>
        </Fragment>
      ),
      width: "16%"
    },
    {
      Header: () => <CustomTableHeader title={"Avg daily transaction size (BTC)"} />,
      accessor: "lb_avg_daily_tx_size",
      Cell: row => (
        <Fragment>
          {row.row.lb_avg_daily_tx_size
            ? numberWith4decimals(row.row.lb_avg_daily_tx_size)
            : 0}
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"30 days transaction size (BTC)"} />,
      accessor: "lb_avg_30d_tx_size",
      Cell: row => (
        <Fragment>
          {row.row.lb_avg_30d_tx_size
            ? numberWith2decimals(row.row.lb_avg_30d_tx_size)
            : 0}
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"30 days transaction size change %"} />,
      accessor: "lb_change_30d_tx_size",
      Cell: row => (
        <Fragment>
          <span style={{ color: row.value >= 0 ? "green" : "red" }}>
            {row.row.lb_premium
              ? numberWithCommas(row.row.lb_premium.toFixed(2))
              : 0}
            %
          </span>
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"Price avg weight (dependent on the size of the transaction the amount"} />,
      accessor: "lb_weighted_avg_price",
      Cell: row => (
        <Fragment>
          <span className="textaligncenter">
            $
            {row.row.lb_weighted_avg_price
              ? numberWith2decimals(row.row.lb_weighted_avg_price)
              : 0}
          </span>
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"Premium"} />,
      accessor: "lb_premium",
      Cell: row => (
        <Fragment>
          <span style={{ color: row.value >= 0 ? "green" : "red" }}>
            {row.row.lb_premium
              ? numberWithCommas(row.row.lb_premium.toFixed(2))
              : 0}
          </span>
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"Volatility (last 30 days)"} />,
      accessor: "lb_volatility_30_days",
      Cell: row => (
        <Fragment>
          <span className="textaligncenter">
            {currency == "0"
              ? numberWith2decimals(row.row.lb_volatility_30_days || 0)
              : numberWith2decimals(row.row.lb_volatility_30_days || 0) +
                currency_sign[Number(currency)]}
          </span>
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    }
  ];
  
  return ( 
      <Content
        style={{
          margin: "24px 16px",
          padding: 30,
          background: "#fff",
          minHeight: 280,
          alignItems: "right"
        }}
      >
        {coins.length > 0 ? (
          <div>
            <div className="row" style={{width:'100%', display: 'flex', padding: 0, margin: 0}}>
              <div style={{textAlign:'left', width:'100%', marginBottom:'20px'}}>
                <span style={{fontSize:'14pt'}}>Top selected Exchanges by DTRA team({coins.length})</span>
              </div>
              <div className="col-sm-6 " style={{justifyContent:'flex-end', padding: 0, width:'100%', display:'flex'}}>
              </div>
            </div>
            <ReactTable
              data={coins}
              columns={coinColumns}
              showPagination={false}
              className="exchangeTable"
              loading={coins.length > 0 ? false : true}
              rowKey={coin => coin.coin_id}
              defaultPageSize={coins.length}
            />
          </div>
        ):  <div style={{width:'100%', textAlign: 'center'}}>
              <span><img src={loading} width="20" height="20" />Loading...</span>
            </div>
        }
      </Content>    
  )
}