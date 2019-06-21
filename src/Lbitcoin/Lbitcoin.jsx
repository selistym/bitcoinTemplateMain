import React, { useState, useEffect, Fragment } from "react";
// common custom components
import { Layout } from "antd";
// custom hook
import { useLocalCoins } from "../hooks";
import { authHeader, dynamicSort, numbericSort } from "../_helpers";
// react-table
import ReactTable from "react-table";
import { CustomTableHeader } from "../CustomTableHeader";
import Select from "react-select";
import Img from "react-image";

import "./Lbitcoin.css";

const { Content } = Layout;
const loading = require("../_helpers/loading.gif");

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

const removeSymbol = x => {
  var strRet=x;
  var idx=strRet.indexOf("(");
  if(idx>0)
    strRet=strRet.substring(0,idx-1);
  return strRet;
};

const options = [
  { value: "0", label: "USD" },
  { value: "1", label: "BTC" },
  { value: "2", label: "ETH" }
];

export const Lbitcoin = () => {
  const currency_sign = ["$", "Ƀ", "Ξ"];
  const currency_letter = ["usd", "btc", "eth"];

  const [coins, toCoins] = useState([]);
  const [currency, setCurrency] = useState("0");
  const fetched = useLocalCoins();

  useEffect(() => {
    toCoins(fetched);
  }, [fetched]);

  // sort coins by mc_rank
  coins.sort(function(a, b) {
    return a.mc_rank - b.mc_rank;
  });

  const coinColumns = [
    {
      Header: () => <CustomTableHeader title={"Name"} />,
      accessor: "lb_currency_name",
      Cell: row => (
        <Fragment>
          <div className="tablehead">
            <Img src={row.original.img_url} width="20px" height="20px" />{" "}
            {removeSymbol(row.row.lb_currency_name)}
          </div>
        </Fragment>
      ),
      width: "16%"
    },
    {
      Header: () => <CustomTableHeader title={"Tx (24h avg)"} />,
      accessor: "lb_avg_daily_tx_size",
      Cell: row => (
        <Fragment>
          ${row.row.lb_avg_daily_tx_size
            ? numberWithCommas(parseInt(row.row.lb_avg_daily_tx_size))
            : 0}
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"Tx (30d avg)"} />,
      accessor: "lb_avg_30d_tx_size",
      Cell: row => (
        <Fragment>
          ${row.row.lb_avg_30d_tx_size
            ? numberWithCommas(parseInt(row.row.lb_avg_30d_tx_size))
            : 0}
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"Volume (30d)"} />,
      accessor: "lb_tot_30d_tx_size",
      Cell: row => (
         <Fragment>
          ${row.row.lb_tot_30d_tx_size
            ? numberWithCommas(parseInt(row.row.lb_tot_30d_tx_size))
            : 0}
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"Volume change (30d)"} />,
      accessor: "lb_change_30d_tx_size",
      Cell: row => (
        <Fragment>
          <span style={{ color: row.value >= 0 ? "green" : "red" }}>
            {row.row.lb_change_30d_tx_size
              ? numberWithCommas(numberWith2decimals(row.row.lb_change_30d_tx_size))
              : 0}
            %
          </span>
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"Price (weighted avg)"} />,
      accessor: "lb_weighted_avg_price",
      Cell: row => (
        <Fragment>
          <span className="textaligncenter">
            $
            {row.row.lb_weighted_avg_price
              ? numberWithCommas(parseInt(row.row.lb_weighted_avg_price))
              : 0}
          </span>
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"Premium / Discount"} />,
      accessor: "lb_premium",
      Cell: row => (
        <Fragment>
          <span style={{ color: row.value >= 0 ? "green" : "red" }}>
            {row.row.lb_premium
              ? numberWithCommas(row.row.lb_premium.toFixed(2))
              : 0}%
          </span>
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"Volatility (30d)"} />,
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
  const changeCurrencyUnit = currency => {
    setCurrency(currency.value);
  };
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
          <div
            className="row"
            style={{ width: "100%", display: "flex", padding: 0, margin: 0 }}
          >
            <div
              className="col-sm-6 "
              style={{ textAlign: "left", width: "100%", padding: "0px" }}
            >
              <span style={{ fontSize: "14pt" }}>
                Localbitcoins transactions by country
              </span>
            </div>
            <div
              className="col-sm-6 "
              style={{
                justifyContent: "flex-end",
                padding: 0,
                width: "100%",
                display: "flex"
              }}
            >
              
            </div>
          </div>
          <div
            className="row"
            style={{
              width: "100%",
              display: "flex",
              padding: 0,
              margin: 0,
              paddingBottom: "10px"
            }}
          >
            {/* <span style={{ fontSize: "12pt" }}>
              The Following section is intended to describe the transactions
              retrieved in Localbitcoins to understand global usage of bitcoin.
            </span> */}
          </div>
          <ReactTable
            data={coins.sort(numbericSort("lb_tot_30d_tx_size"))}
            columns={coinColumns}
            showPagination={false}
            className="lbitcoinTable"
            loading={coins.length > 0 ? false : true}
            rowKey={coin => coin.lb_tot_30d_tx_size}
            defaultPageSize={coins.length}
          />
        </div>
      ) : (
        <div style={{ width: "100%", textAlign: "center" }}>
          <span>
            <img src={loading} width="20" height="20" />
            Loading...
          </span>
        </div>
      )}
    </Content>
  );
};
