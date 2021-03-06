import React, { useState, useEffect } from "react";
// common custom components
import { Layout } from "antd";
// custom hook
import { useExchanges, numberWithCommasDecimals } from "../../utils";
// react-table
import ReactTable from "react-table";
import { CustomTableHeader } from "../CustomTableHeader";
import Img from "react-image";
import "./Exchange.css";
import { numbericSort } from "../../_helpers";

import loading from "../../static/loading.gif";

const { Content } = Layout;

export const Exchange = () => {
  
  const [coins, toCoins] = useState([]);  
  const fetched = useExchanges();

  useEffect(() => {
    toCoins(fetched);
  }, [fetched]);

  // sort coins by mc_rank
  coins.sort((a, b) => a.mc_rank - b.mc_rank);

  const coinColumns = [
    {
      Header: () => <CustomTableHeader title={"Name"} />,
      accessor: "exch_exchange_title",
      Cell: row => 
        <div className="tablehead">
          <Img src={row.original.img_url} width="20px" height="20px" />{" "}
          {row.row.exch_exchange_title}
        </div>,
      width: "150"
    },{
      Header: () => <CustomTableHeader title={"Country"} />,
      accessor: "exch_country",
      Cell: row => <span className="textaligncenter">{row.row.exch_country}</span>,
      sortMethod: (a, b) => a - b,
      width: "8%"
    },{
      Header: () => <CustomTableHeader title={"Volume 24 Hr"} />,
      accessor: "exch_day_volume_usd",
      Cell: row => <span style={{color: "blue"}}>${numberWithCommasDecimals(row.row.exch_day_volume_usd)}</span>,
      sortMethod: (a, b) => a - b,
      width: "8%"
    },{
      Header: () => <CustomTableHeader title={"Volume 24 Hr %"} />,
      accessor: "exch_day_volume_change_usd",
      Cell: row => 
          <span style={{ color: row.row.exch_day_volume_change_usd >= 0 ? "green" : "red"}}>
            {numberWithCommasDecimals(row.row.exch_day_volume_change_usd, 2)}%
          </span>,
      sortMethod: (a, b) => a - b,
      width: "8%"
    },{
      Header: () => <CustomTableHeader title={"Number of Pairs"} />,
      accessor: "exch_num_of_pairs",
      Cell: row => 
          <span>{numberWithCommasDecimals(row.row.exch_num_of_pairs, 2)}</span>,
      sortMethod: (a, b) => a - b,
      width: "8%"
    },{
      Header: () => <CustomTableHeader title={"Decenterilzed"} />,
      accessor: "exch_is_decenterilzed",
      Cell: row => <span>{row.row.exch_is_decenterilzed ? "true" : "false"}</span>,
      sortMethod: (a, b) => a - b,
      width: "8%"
    },{
      Header: () => <CustomTableHeader title={"KYC"} />,
      accessor: "exch_kyc",
      Cell: row => <span>{row.row.exch_kyc ? "true" : "false"}</span>,
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
