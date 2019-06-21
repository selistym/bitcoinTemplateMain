import React, { useState, useEffect, Fragment } from "react";
// common custom components
import { Layout } from "antd";
// custom hook
import { useExchanges } from "../hooks";
// react-table
import ReactTable from "react-table";
import { CustomTableHeader } from "../CustomTableHeader";
import Img from "react-image";
import "./Exchange.css";
import { numbericSort } from "../_helpers";

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
      Header: () => <CustomTableHeader title={"Name"} />,
      accessor: "exch_exchange_title",
      Cell: row => (
        <Fragment>
          <div className="tablehead">
            <Img src={row.original.img_url} width="20px" height="20px" />{" "}
            {row.row.exch_exchange_title}
          </div>
        </Fragment>
      ),
      width: "150"
    },

    {
      Header: () => <CustomTableHeader title={"Country"} />,
      accessor: "exch_country",
      Cell: row => (
        <Fragment>
          <span className="textaligncenter">{row.row.exch_country}</span>
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"Volume 24 Hr"} />,
      accessor: "exch_day_volume_usd",
      Cell: row => (
        <Fragment>
         <span
            style={{
              color: "blue"
            }}
          >
             ${row.row.exch_day_volume_usd
              ? numberWithCommas(parseInt(row.row.exch_day_volume_usd))
              : 0}
          </span>
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"Volume 24 Hr %"} />,
      accessor: "exch_day_volume_change_usd",
      Cell: row => (
        <Fragment>
          <span
            style={{
              color: row.row.exch_day_volume_change_usd >= 0 ? "green" : "red"
            }}
          >
            {row.row.exch_day_volume_change_usd != 0
              ? numberWith2decimals(row.row.exch_day_volume_change_usd)
              : 0}
            %
          </span>
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"Number of Pairs"} />,
      accessor: "exch_num_of_pairs",
      Cell: row => (
        <Fragment>
          <span className="textaligncenter">
            {row.row.exch_num_of_pairs
              ? numberWith2decimals(row.row.exch_num_of_pairs)
              : 0}
          </span>
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"Decenterilzed"} />,
      accessor: "exch_is_decenterilzed",
      Cell: row => (
        <Fragment>
          <span>{row.row.exch_is_decenterilzed ? "true" : "false"}</span>
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => <CustomTableHeader title={"KYC"} />,
      accessor: "exch_kyc",
      Cell: row => (
        <Fragment>
          <span>{row.row.exch_kyc ? "true" : "false"}</span>
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
            style={{ width: "100%", display: "flex", padding: 0, margin: 0 }}
          >
            <div
              style={{ textAlign: "left", width: "100%", marginBottom: "20px" }}
            >
              <span style={{ fontSize: "14pt" }}>
                Top selected Exchanges by DTRA team
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
            />
          </div>
          <ReactTable
            data={coins.sort(numbericSort("exch_day_volume_usd"))}
            columns={coinColumns}
            showPagination={false}
            className="exchangeTable"
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
