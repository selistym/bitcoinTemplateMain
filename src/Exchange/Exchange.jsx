import React, { useState, useEffect, Fragment} from "react";
// common custom components
import { Layout } from "antd";
// custom hook
import { useAllCoins } from "../hooks";
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

export const Exchange = () => {
  const currency_sign = ["$", "Ƀ", "Ξ"];
  const currency_letter = ["usd", "btc", "eth"];  

  const [coins, toCoins] = useState([]);
  const [currency, setCurrency] = useState("0");
  const fetched = useAllCoins();
  
  useEffect(() => {
    toCoins(fetched);
  }, [fetched]);

  // sort coins by mc_rank
  coins.sort(function(a, b) {
    return a.mc_rank - b.mc_rank;
  });

  const coinColumns = [
    {
      Header: () => <CustomTableHeader title={"#"} />,
      accessor: "mc_rank",
      sortMethod: (a, b) => a - b,
      width: "40"
    },
    {
      Header: () => <CustomTableHeader title={"Name"} />,
      accessor: "coin_title",
      Cell: row => (
        <Fragment>
          <div className="tablehead">
          <Img src={row.original.img_url} width="20px" height="20px" />{" "}
          {row.row.coin_title}
          </div>
        </Fragment>
      ),
      width: "16%"
    },
    {
      Header: () => <CustomTableHeader title={"Volume 24 Hr"} />,
      accessor: "asset_price_" + currency_letter[currency],
      Cell: row => {        
        if (row.value) {          
          if (row.value > 100) {
            return (
              <Fragment>
                {" "}
                <span className="textaligncenter">
                  {currency == "0"
                    ? currency_sign[currency] + numberWithCommas(row.value)
                    : numberWithCommas(row.value) + currency_sign[currency]}
                </span>
              </Fragment>
            );
          } else if (row.value < 1) {            
            if(row.value <= 0.000000001){
              return (
                <Fragment>
                  <span className="textaligncenter">
                    {currency == "0"
                      ? currency_sign[currency] +
                        (row.value).toPrecision(4)
                      : (row.value).toPrecision(4) +
                        currency_sign[currency]}
                  </span>
                </Fragment>
              );
            }
            return (
              <Fragment>
                <span className="textaligncenter">
                  {currency == "0"
                    ? currency_sign[currency] +
                      numberWithCommas(numberWith6decimals(row.value))
                    : numberWithCommas(numberWith6decimals(row.value)) +
                      currency_sign[currency]}
                </span>
              </Fragment>
            );
          } else {
            return (
              <Fragment>
                <span className="textaligncenter">
                  {currency == "0"
                    ? currency_sign[currency] +
                      numberWithCommas(row.value.toFixed(2))
                    : numberWithCommas(row.value.toFixed(2)) +
                      currency_sign[currency]}
                </span>
              </Fragment>
            );
          }
        }
        return <Fragment>$0</Fragment>;
      },
      sortMethod: (a, b) => a - b,
      width: "8%"
    },
    {
      Header: () => (
        <CustomTableHeader title={"Volume 24 Hr %"} />
      ),
      accessor: "supply_ratio",
      Cell: row => (
        <Fragment>
          {row.value ? numberWithCommas(row.value.toFixed(2)) + "%" : 0}
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "13%"
    },
    {
      Header: () => <CustomTableHeader title={"Number of Pairs"} />,
      accessor: "min_max_position_" + currency_letter[currency],
      Cell: row => (
        <Fragment>
          {row.value ? numberWithCommas(numberWith6decimals(row.value)) : 0}
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "7%"
    },
    {
      Header: () => <CustomTableHeader title={"Decenterized"} />,
      accessor: "min_max_position_" + currency_letter[currency],
      Cell: row => (
        <Fragment>
          {row.value ? numberWithCommas(numberWith6decimals(row.value)) : 0}
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "7%"
    },
    {
      Header: () => <CustomTableHeader title={"KYC"} />,
      accessor: "min_max_position_" + currency_letter[currency],
      Cell: row => (
        <Fragment>
          {row.value ? numberWithCommas(numberWith6decimals(row.value)) : 0}
        </Fragment>
      ),
      sortMethod: (a, b) => a - b,
      width: "7%"
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