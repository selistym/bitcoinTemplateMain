import React, { useState, useEffect } from 'react';
// common custom components
import { Navigation } from '../Navigation';
import { CustomHeader } from '../Header';
// Layout
import { Layout, Table } from 'antd';
// custom hook
import { useListCoins, useAllCoins } from '../hooks';

const loading = require('../_helpers/loading.gif');
// helpers
import { dynamicSort } from '../_helpers';

const { Content } = Layout;

import './HomePage.css';

function numberWithCommas(x) {
  // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if(x){
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }
  return '';  
}

function numberwith6decimals(x) {
  if(x){
    if (parseFloat(x).toFixed(6) != parseFloat(x)) {
      return parseFloat(x).toFixed(6);
    }
    return x;
  }
  return '';  
}

export const HomePage = () => {

  const [coins, toCoins] = useState([]);

  const fetched = useAllCoins();
  useEffect(() => {
    toCoins(fetched);
    setTimeout(() => {
      const allimages = document.getElementsByTagName('img');
      for (let i = 0; i < allimages.length; i++) {
        if (allimages[i].getAttribute('data-src')) allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
      }
    }, 1200);
  }, [fetched]);

  const coinColumnsShort = [
    {
      title: '#',
      dataIndex: 'mc_rank',
      key: '1',
      sorter: (a, b) => a.mc_rank - b.mc_rank,      
    },
    {
      title: 'Asset Name',
      dataIndex: 'coin_title',
      key: '2',
      sorter: (a, b) => a.coin_title.localeCompare(b.coin_title),
      render: (volume, row) => (
        <div><img src={loading} data-src={row.img_url} width="20" height="20" /> {row.coin_title}</div>
      ),
      
    }
    , {
      title: 'Market Cap',
      dataIndex: 'market_cap_usd',
      key: '3',
      sorter: (a, b) => a.market_cap_usd - b.market_cap_usd,
      render: (volume, row) => {
        if (volume)
          return '$' + numberWithCommas(parseInt(volume).toFixed(0) || 0);
      },
      
    }, {
      title: 'Price',
      dataIndex: 'asset_price',
      key: '4',
      render: (volume, row) => {
        if (row.asset_price){
          if(row.asset_price > 100){
            return <span style={{color: 'blue'}}>{'$' + numberWithCommas((row.asset_price || 0).toFixed(0))}</span>
          }else if(row.asset_price < 1){
            return <span style={{color: 'blue'}}>{'$' + numberwith6decimals(row.asset_price || 0)}</span>
          }else{
            return <span style={{color: 'blue'}}>{'$' + numberWithCommas((row.asset_price || 0).toFixed(2))}</span>
          }          
        }
      },
      sorter: (a, b) => a.asset_price - b.asset_price,
      
    }, {
      title: 'Volume (24H)',
      dataIndex: 'volume_24',
      key: '6',
      render: (volume, row) => {
        if (volume)
          return <span style={{color: 'blue'}}>{"$" + numberWithCommas(parseInt(volume) || 0)}</span>
      },
      sorter: (a, b) => a.volume_24 - b.volume_24,
      
    },{
      title: 'ATH (USD)',
      dataIndex: 'ath',
      key: '8',
      render: (volume, row) => {
        if(row.ath > 100){
          return '$' + numberWithCommas((row.ath).toFixed(0));
        }else if(row.ath < 1){
          return '$' + (numberwith6decimals(row.ath));
        }else{
          return '$' + ((row.ath).toFixed(2));
        }        
      },
      sorter: (a, b) => a.ath - b.ath,      
    },
    {
      title: 'ATL (USD)',
      dataIndex: 'atl',
      key: '9',
      render: (volume, row) => {
        if (row.atl)
          return '$' + numberwith6decimals(row.atl);
      },
      sorter: (a, b) => a.atl - b.atl,
      
    },{
      title: 'Buy Support 5%',
      dataIndex: 'buy_support_5',
      key: '10',
      render: (volume, row) => {
        if (row.buy_support_5)
          return '$' + numberWithCommas(Number.parseInt(row.buy_support_5) || 0);
      },
      sorter: (a, b) => a.buy_support_5 - b.buy_support_5,
      
    },
    {
      title: 'Sell Support 5%',
      dataIndex: 'sell_support_5',
      key: '11',
      render: (volume, row) => {
        if (row.sell_support_5)
          return '$' + numberWithCommas(Number.parseInt(row.sell_support_5) || 0);
      },
      sorter: (a, b) => a.sell_support_5 - b.sell_support_5,
      
    }, {
      title: 'Price Change (24H)',
      dataIndex: 'asset_price_old',
      key: '5',
      render: (price, row) => {
        if (price){          
          return <span style={{color: price >= 0 ? 'green' : 'red'}}>{price} %</span>
        }
      },
      sorter: (a, b) => a.asset_price_old - b.asset_price_old,
      
    },
    {
      title: 'Volume Change',
      dataIndex: 'volume_change_24',
      key: '7',
      render: (volume, row) => {
        if (volume){          
          return <span style={{color: volume >= 0 ? 'green' : 'red'}}>{volume} %</span>
        }
      },
      sorter: (a, b) => a.volume_change_24 - b.volume_change_24,
      
    },        
    {
      title: 'TA Rating',
      dataIndex: 'ta_rating',
      key: '12',
      sorter: (a, b) => a.ta_rating - b.ta_rating,
      render: value => <span style={{fontWeight:'bold'}}>{value}</span>
    },
    {
      title: 'Volatility 30 days',
      dataIndex: 'volatility_30_usd',
      key: '13',
      render: (volume, row) => {
        if (row.volatility_30_usd)
          return Number.parseFloat(row.volatility_30_usd).toFixed(2);
      },
      sorter: (a, b) => a.volatility_30_usd - b.volatility_30_usd,
      
    },
  ];

  // sort coins by mc_rank
  coins.sort(function (a, b) { return a.mc_rank - b.mc_rank });

  return (
    <div>
      <Layout>
        <Navigation activeNav="1" />
        <Layout>
          <CustomHeader />
          <Content style={{ margin: '24px 16px', padding: 30, background: '#fff', minHeight: 280 }}>
            <Table className="homeTable" loading={coins.length > 0 ? false : true} rowKey={coin => coin.coin_id} pagination={false}  dataSource={coins} columns={coinColumnsShort} />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
