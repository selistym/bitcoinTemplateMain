import React, { useState, useEffect, Fragment } from "react";
// common custom components
import { Layout } from "antd";
// custom hook
import { useStableCoins } from "../../utils";
// react-table
import ReactTable from "react-table";
import { CustomTableHeader } from "../CustomTableHeader";

import Img from "react-image";
import "./Stable.css";
import { numbericSort } from "../../_helpers";

import loading from "../../static/loading.gif";
const { Content } = Layout;

const numberWithCommas = x => {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
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
const numberWith6decimals = x => {
  if (parseFloat(x).toFixed(6) != parseFloat(x)) {
    return parseFloat(x).toFixed(6);
  }
  return x;
};

const options = [
  { value: "0", label: "USD" },
  { value: "1", label: "BTC" },
  { value: "2", label: "ETH" }
];

export const Stable = () => {
  const currency_sign = ["$", "Ƀ", "Ξ"];
  const currency_letter = ["usd", "btc", "eth"];

  const [coins, toCoins] = useState([]);
  const [currency, setCurrency] = useState("0");
  const fetched = useStableCoins();

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
      accessor: "stc_tcoin_title",
      Cell: row => (
        <Fragment>
          <div className="tablehead">
            <Img src={row.original.img_url} width="20px" height="20px" />{" "}
            {row.row.stc_tcoin_title}
          </div>
        </Fragment>
      ),
      width: "150"
    },
    {
      Header: () => <CustomTableHeader title={"Marketcap"} />,
      accessor: "stc_marketcap_usd",
      Cell: row => (
        <Fragment>
          <span className="textaligncenter">
            ${row.row.stc_marketcap_usd
              ? numberWithCommas(row.row.stc_marketcap_usd.toFixed(0))
              : 0}
          </span>
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"Price"} />,
      accessor: "stc_current_usd",
      Cell: row => (
        <Fragment>
          <span className="textaligncenter">
            ${row.row.stc_current_usd
              ? numberWith2decimals(row.row.stc_current_usd)
              : 0}
          </span>
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"Use Case"} />,
      accessor: "stc_use_case",
      Cell: row => (
        <Fragment>
          <span className="textaligncenter">
            {row.row.stc_use_case}
          </span>
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"Collateral"} />,
      accessor: "stc_collateral",
      Cell: row => (
        <Fragment>
          <span className="textaligncenter">
            {row.row.stc_collateral}
          </span>
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"Platform/Blockchain"} />,
      accessor: "stc_platform",
      Cell: row => (
        <Fragment>
          <span className="textaligncenter">
            {row.row.stc_platform}
          </span>
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"Launch Year"} />,
      accessor: "stc_launch_year",
      Cell: row => (
        <Fragment>
          <span className="textaligncenter">
            {row.row.stc_launch_year
              ? numberWith2decimals(row.row.stc_launch_year)
              : 0}
          </span>
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"Volume 24 Hr/%"} />,
      accessor: "stc_day_volume_change_usd",
      Cell: row => (
        <Fragment>
           <span style={{ color: row.value >= 0 ? "green" : "red" }}>
            {row.row.stc_day_volume_change_usd
              ? numberWith2decimals(row.row.stc_day_volume_change_usd)
              : 0}
            %
          </span>
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"Volume 30D/%"} />,
      accessor: "stc_30_day_volume_change_usd",
      Cell: row => (
        <Fragment>
           <span style={{ color: row.value >= 0 ? "green" : "red" }}>
            {row.row.stc_30_day_volume_change_usd
              ? numberWith2decimals(row.row.stc_30_day_volume_change_usd)
              : 0}
            %
          </span>
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"Volatility (30D)"} />,
      accessor: "stc_volatility_30_usd",
      Cell: row => (
        <Fragment>
          <span className="textaligncenter">
            {row.row.stc_volatility_30_usd
              ? numberWith2decimals(row.row.stc_volatility_30_usd)
              : 0}
          </span>
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"Number of Pairs"} />,
      accessor: "stc_num_of_pairs",
      Cell: row => (
        <Fragment>
          <span className="textaligncenter">
            {row.row.stc_num_of_pairs
              ? numberWithCommas(row.row.stc_num_of_pairs)
              : 0}
          </span>
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"Traded Exchanges"} />,
      accessor: "stc_traded_exchanges",
      Cell: row => (
        <Fragment>
          <span className="textaligncenter">
            {row.row.stc_traded_exchanges
              ? numberWithCommas(row.row.stc_traded_exchanges)
              : 0}
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
          <div
            className="row"
            style={{
              width: "100%",
              display: "flex",
              padding: 0,
              margin: 0,
              paddingBottom: "20px"
            }}
          >
            <div
              className="col-sm-6 "
              style={{ textAlign: "left", width: "100%", padding: "0px" }}
            >
              <span style={{ fontSize: "14pt" }}>
                STABLECOINS
              </span>
            </div>
          </div>

          <ReactTable
            data={coins.sort(numbericSort("stc_marketcap_usd"))}
            columns={coinColumns}
            showPagination={false}
            className="stableTable"
            loading={coins.length > 0 ? false : true}
            rowKey={coin => coin.coin_id}
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
