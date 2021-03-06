import React from 'react';
import { CustomTableHeader } from "../components/CustomTableHeader";
import { numberWithExpressive, numberWithCommasDecimals } from "../utils";
export const GROUPED_DEFAULT_FIELDS = [
    "twitter_followers",
    "github_closed_pull_issues",
    "volatility_120_usd",
    "usd_ath",
    "current_div_ath_usd",
    "mayer_multiple_usd",
    "last120_div_past120_usd",
    "buy_10_div_mcap",
    "amir_liquidity_metric"
];
export const GROUPED_TOTAL_FIELDS = [
    {
        section: "Basic Market Data",
        fields: [
            { label: "Token supply", field: "token_supply" },
            { label: "Marketcap", field: "market_cap_usd" },
            { label: "Price USD", field: "asset_price_usd" },
            { label: "Price BTC", field: "asset_price_btc" },
            { label: "Price ETH", field: "asset_price_eth" },
            { label: "Volume 24h USD", field: "volume_24_usd" },
            { label: "Volume 24h BTC", field: "volume_24_btc" },
            { label: "Volume 24h ETH", field: "volume_24_eth" },
            { label: "Volume change USD (24h)", field: "volume_change_24_usd" },
            { label: "Volume change BTC (24h)", field: "volume_change_24_btc" },
            { label: "Volume change ETH (24h)", field: "volume_change_24_eth" }
        ]
    },
    {
        section: "Price Change (%)",
        fields: [
            { label: "Price change (24h) USD", field: "price_change_24_usd" },
            { label: "Price change (24h) BTC", field: "price_change_24_btc" },
            { label: "Price change (24h) ETH", field: "price_change_24_eth" },
            { label: "Price change (7days) USD", field: "week_usd_change" },
            { label: "Price change (7days) BTC", field: "week_btc_change" },
            { label: "Price change (7days) ETH", field: "week_eth_change" }
        ]
    },
    {
        section: "Price Ratios",
        fields: [
            { label: "Mayer Multiple (USD)", field: "mayer_multiple_usd" },
            { label: "Mayer Multiple (BTC)", field: "mayer_multiple_btc" },
            { label: "Mayer Multiple (ETH)", field: "mayer_multiple_eth" },
            {
                label: "30 days ratio (USD) Last 30d price avg / Past 30d price avg",
                field: "last30_div_past30_usd"
            },
            {
                label: "30 days ratio (BTC) Last 30d price avg / Past 30d price avg",
                field: "last30_div_past30_btc"
            },
            {
                label: "30 days ratio (ETH) Last 30d price avg / Past 30d price avg",
                field: "last30_div_past30_eth"
            },
            {
                label: "60 days ratio (USD) Last 60d price avg / Past 60d price avg",
                field: "last60_div_past60_usd"
            },
            {
                label: "60 days ratio (BTC) Last 60d price avg / Past 60d price avg",
                field: "last60_div_past60_btc"
            },
            {
                label: "60 days ratio (ETH) Last 60d price avg / Past 60d price avg",
                field: "last60_div_past60_eth"
            },
            {
                label: "120 days ratio (USD) Last 120d price avg / Past 120d price avg",
                field: "last120_div_past120_usd"
            },
            {
                label: "120 days ratio (BTC) Last 120d price avg / Past 120d price avg",
                field: "last120_div_past120_btc"
            },
            {
                label: "120 days ratio (ETH) Last 120d price avg / Past 120d price avg",
                field: "last120_div_past120_eth"
            },
            {
                label: "1 year ratio (USD) Last year price avg / Past year price avg",
                field: "lastyear_div_pastyear_usd"
            },
            {
                label: "1 year ratio (BTC) Last year price avg / Past year price avg",
                field: "lastyear_div_pastyear_btc"
            },
            {
                label: "1 year ratio (ETH) Last year price avg / Past year price avg",
                field: "lastyear_div_pastyear_eth"
            }
        ]
    },
    {
        section: "ATH/ATL",
        fields: [
            { label: "ATH (USD)", field: "usd_ath" },
            { label: "ATH (BTC)", field: "btc_ath" },
            { label: "ATH (ETH)", field: "eth_ath" },
            { label: "Days since ATH (USD)", field: "days_ath_usd" },
            { label: "Days since ATH (BTC)", field: "days_ath_btc" },
            { label: "Days since ATH (ETH)", field: "days_ath_eth" },
            { label: "ATH/Current Price (USD)", field: "current_div_ath_usd" },
            { label: "ATH/Current Price (BTC)", field: "current_div_ath_btc" },
            { label: "ATH/Current Price (ETH)", field: "current_div_ath_eth" },
            { label: "ATL (USD)", field: "usd_atl" },
            { label: "ATL (BTC)", field: "btc_atl" },
            { label: "ATL (ETH)", field: "eth_atl" },
            { label: "Days since ATL (USD)", field: "days_atl_usd" },
            { label: "Days since ATL (BTC)", field: "days_atl_btc" },
            { label: "Days since ATL (ETH)", field: "days_atl_eth" },
            { label: "ATL/Current Price (USD)", field: "atl_div_current_usd" },
            { label: "ATL/Current Price (BTC)", field: "atl_div_current_btc" },
            { label: "ATL/Current Price (ETH)", field: "atl_div_current_eth" },
            { label: "MIN MAX POSITION (USD)", field: "min_max_position_usd" },
            { label: "MIN MAX POSITION (BTC)", field: "min_max_position_btc" },
            { label: "MIN MAX POSITION (ETH)", field: "min_max_position_eth" }
        ]
    },
    {
        section: "Liquiduty",
        fields: [
            { label: "Buy Support 1%", field: "buy_support_1" },
            { label: "Buy Support 2%", field: "buy_support_2" },
            { label: "Buy Support 3%", field: "buy_support_3" },
            { label: "Buy Support 4%", field: "buy_support_4" },
            { label: "Buy Support 5%", field: "buy_support_5" },
            { label: "Buy Support 10%", field: "buy_support_10" },
            { label: "Buy Support 15%", field: "buy_support_15" },
            { label: "Sell Support 1%", field: "sell_support_1" },
            { label: "Sell Support 2%", field: "sell_support_2" },
            { label: "Sell Support 3%", field: "sell_support_3" },
            { label: "Sell Support 4%", field: "sell_support_4" },
            { label: "Sell Support 5%", field: "sell_support_5" },
            { label: "Sell Support 10%", field: "sell_support_10" },
            { label: "Sell Support 15%", field: "sell_support_15" },
            { label: "Buy 5%/Sell 5%", field: "buy_div_sell_5" },
            { label: "Buy 10%/Sell 10%", field: "buy_div_sell_10" },
            { label: "Buy Support 10% / Marketcap", field: "buy_10_div_mcap" },
            {
                label: "(Buy 10%/Sell 10%)^2 * (Buy 10%/Marketcap)",
                field: "amir_liquidity_metric"
            },
            {
                label: "(Buy 10%-Sell 10%) / (Buy 10%+Sell 10%)",
                field: "andrey_liquidity_metric"
            }
        ]
    },
    {
        section: "Volatility",
        fields: [
            { label: "Volatilty 30 day (USD)", field: "volatility_30_usd" },
            { label: "Volatilty 30 day (BTC)", field: "volatility_30_btc" },
            { label: "Volatilty 30 day (ETH)", field: "volatility_30_etc" },
            { label: "Volatilty 60 days (USD)", field: "volatility_60_usd" },
            { label: "Volatilty 60 days (BTC)", field: "volatility_60_btc" },
            { label: "Volatilty 60 days (ETH)", field: "volatility_60_eth" },
            { label: "Volatilty 120 days (USD)", field: "volatility_120_usd" },
            { label: "Volatilty 120 days (BTC)", field: "volatility_120_btc" },
            { label: "Volatilty 120 days (ETH)", field: "volatility_120_eth" },
            { label: "Volatilty 1 year (USD)", field: "volatility_year_usd" },
            { label: "Volatilty 1 year (BTC)", field: "volatility_year_btc" },
            { label: "Volatilty 1 year (ETH)", field: "volatility_year_eth" }
        ]
    },
    {
        section: "Social",
        fields: [
            { label: "Twitter followers", field: "twitter_followers" },
            { label: "Twitter favorites", field: "twitter_favorites" },
            { label: "Twitter following", field: "twitter_following" },
            { label: "Twitter status", field: "twitter_status" },
            { label: "Reddit active users", field: "reddit_active_users" },
            { label: "Reddit posts", field: "reddit_posts_daily" },
            { label: "Reddit comments", field: "reddit_comments_daily" },
            { label: "Reddit subscribers", field: "reddit_subscribers" }
        ]
    },
    {
        section: "Development",
        fields: [
            { label: "Github Closed issues", field: "github_closed_issues" },
            { label: "Github Open pull issues", field: "github_open_pull_issues" },
            {
                label: "Github Closed pull issues",
                field: "github_closed_pull_issues"
            },
            { label: "Github Forks", field: "github_forks" },
            { label: "Github Subscribers", field: "github_subscribers" },
            { label: "Github", field: "github_stars" }
        ]
    }
];

//for comparison component
export const FULL_COLUMNS = [    
    {
        label: "Name",
        Header: () => <CustomTableHeader title={"Name"} />,
        accessor: "img_url",
        Cell: row => <img src={loading} data-src={row.original.img_url} width="20" height="20" />,
        width: "7%"
    }, {
        label: "Market Momentum (7 days)",
        Header: () => <CustomTableHeader title={"Market Momentum (7 days)"} />,
        accessor: "ta_score",
        Cell: row => <span style={{ fontWeight: "bold" }}>{numberWithCommasDecimals(row.value, 2)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Token supply",
        Header: () => <CustomTableHeader title={"Token supply"} />,
        accessor: "token_supply",
        Cell: row => <span>{numberWithCommasDecimals(row.value)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Marketcap",
        Header: () => <CustomTableHeader title={"Marketcap"} />,
        accessor: "market_cap_usd",
        Cell: row => <span>{numberWithCommasDecimals(row.value)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Price USD",
        Header: () => <CustomTableHeader title={"Price USD"} />,
        accessor: "asset_price_usd",
        Cell: row => <span style={{ color: "blue" }}>${numberWithExpressive(row.value)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Price BTC",
        Header: () => <CustomTableHeader title={"Price BTC"} />,
        accessor: "asset_price_btc",
        Cell: row => <span style={{ color: "blue" }}>{numberWithExpressive(row.value)}₿</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Price ETH",
        Header: () => <CustomTableHeader title={"Price ETH"} />,
        accessor: "asset_price_eth",
        Cell: row => <span style={{ color: "blue" }}>{numberWithExpressive(row.value)}Ξ</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Price change (24h) USD",
        Header: () => <CustomTableHeader title={"Price change USD (24h)"} />,
        accessor: "price_change_24_usd",
        Cell: row => <span style={{ color: row.value >= 0 ? "green" : "red" }}>{numberWithCommasDecimals(row.value, 2)}%</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Price change (24h) BTC",
        Header: () => <CustomTableHeader title={"Price change BTC (24h)"} />,
        accessor: "price_change_24_btc",
        Cell: row => <span style={{ color: row.value >= 0 ? "green" : "red" }}>{numberWithCommasDecimals(row.value, 2)}%</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Price change (24h) ETH",
        Header: () => <CustomTableHeader title={"Price change ETH (24h)"} />,
        accessor: "price_change_24_eth",
        Cell: row => <span style={{ color: row.value >= 0 ? "green" : "red" }}>{numberWithCommasDecimals(row.value, 2)}%</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Volume 24h USD",
        Header: () => <CustomTableHeader title={"Volume 24h USD"} />,
        accessor: "volume_24_usd",
        Cell: row => <span style={{ color: "blue" }}>{numberWithCommasDecimals(row.value)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Volume 24h BTC",
        Header: () => <CustomTableHeader title={"Volume 24h BTC"} />,
        accessor: "volume_24_btc",
        Cell: row => <span style={{ color: "blue" }}>{numberWithCommasDecimals(row.value)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Volume 24h ETH",
        Header: () => <CustomTableHeader title={"Volume 24h ETH"} />,
        accessor: "volume_24_eth",
        Cell: row => <span style={{ color: "blue" }}>{numberWithCommasDecimals(row.value)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Volume change USD (24h)",
        Header: () => <CustomTableHeader title={"Volume change USD (24h)"} />,
        accessor: "volume_change_24_usd",
        Cell: row => <span style={{ color: row.value >= 0 ? "green" : "red" }}>{numberWithCommasDecimals(row.value, 2)}%</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Volume change BTC (24h)",
        Header: () => <CustomTableHeader title={"Volume change BTC (24h)"} />,
        accessor: "volume_change_24_btc",
        Cell: row => <span style={{ color: row.value >= 0 ? "green" : "red" }}>{numberWithCommasDecimals(row.value, 2)}%</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Volume change ETH (24h)",
        Header: () => <CustomTableHeader title={"Volume change ETH (24h)"} />,
        accessor: "volume_change_24_eth",
        Cell: row => <span style={{ color: row.value >= 0 ? "green" : "red" }}>{numberWithCommasDecimals(row.value, 2)}%</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Twitter list",
        Header: () => <CustomTableHeader title={"Twitter list"} />,
        accessor: "twitter_list",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Twitter favorites",
        Header: () => <CustomTableHeader title={"Twitter favorites"} />,
        accessor: "twitter_favorites",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Twitter following",
        Header: () => <CustomTableHeader title={"Twitter following"} />,
        accessor: "twitter_following",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Twitter status",
        Header: () => <CustomTableHeader title={"Twitter status"} />,
        accessor: "twitter_status",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Twitter followers",
        Header: () => <CustomTableHeader title={"Twitter followers"} />,
        accessor: "twitter_followers",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Reddit active users",
        Header: () => <CustomTableHeader title={"Reddit active users"} />,
        accessor: "reddit_active_users",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Reddit posts",
        Header: () => <CustomTableHeader title={"Reddit posts"} />,
        accessor: "reddit_posts_daily",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Reddit comments",
        Header: () => <CustomTableHeader title={"Reddit comments"} />,
        accessor: "reddit_comments_daily",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Reddit subscribers",
        Header: () => <CustomTableHeader title={"Reddit subscribers"} />,
        accessor: "reddit_subscribers",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Github Closed issues",
        Header: () => <CustomTableHeader title={"Github Closed issues"} />,
        accessor: "github_closed_issues",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Github Open pull issues",
        Header: () => <CustomTableHeader title={"Github Open pull issues"} />,
        accessor: "github_open_pull_issues",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Github Closed pull issues",
        Header: () => <CustomTableHeader title={"Github Closed pull issues"} />,
        accessor: "github_closed_pull_issues",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Github Forks",
        Header: () => <CustomTableHeader title={"Github Forks"} />,
        accessor: "github_forks",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Github Subscribers",
        Header: () => <CustomTableHeader title={"Github Subscribers"} />,
        accessor: "github_subscribers",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Github",
        Header: () => <CustomTableHeader title={"Github"} />,
        accessor: "github_stars",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Volatilty 30 day (USD)",
        Header: () => <CustomTableHeader title={"Volatilty 30 day (USD)"} />,
        accessor: "volatility_30_usd",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 2)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Volatilty 30 day (BTC)",
        Header: () => <CustomTableHeader title={"Volatilty 30 day (BTC)"} />,
        accessor: "volatility_30_btc",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 2)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Volatilty 30 day (ETH)",
        Header: () => <CustomTableHeader title={"Volatilty 30 day (ETH)"} />,
        accessor: "volatility_30_eth",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 2)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Volatilty 60 days (USD)",
        Header: () => <CustomTableHeader title={"Volatilty 60 days (USD)"} />,
        accessor: "volatility_60_usd",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 2)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Volatilty 60 days (BTC)",
        Header: () => <CustomTableHeader title={"Volatilty 60 days (BTC)"} />,
        accessor: "volatility_60_btc",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 2)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Volatilty 60 days (ETH)",
        Header: () => <CustomTableHeader title={"Volatilty 60 days (ETH)"} />,
        accessor: "volatility_60_eth",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 2)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Volatilty 120 days (USD)",
        Header: () => <CustomTableHeader title={"Volatilty 120 days (USD)"} />,
        accessor: "volatility_120_usd",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 2)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Volatilty 120 days (BTC)",
        Header: () => <CustomTableHeader title={"Volatilty 120 days (BTC)"} />,
        accessor: "volatility_120_btc",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 2)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Volatilty 120 days (ETH)",
        Header: () => <CustomTableHeader title={"Volatilty 120 days (ETH)"} />,
        accessor: "volatility_120_eth",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 2)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Volatilty 1 year (USD)",
        Header: () => <CustomTableHeader title={"Volatilty 1 year (USD)"} />,
        accessor: "volatility_year_usd",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 2)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Volatilty 1 year (BTC)",
        Header: () => <CustomTableHeader title={"Volatilty 1 year (BTC)"} />,
        accessor: "volatility_year_btc",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 2)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Volatilty 1 year (ETH)",
        Header: () => <CustomTableHeader title={"Volatilty 1 year (ETH)"} />,
        accessor: "volatility_year_eth",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 2)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "ATH (USD)",
        Header: () => <CustomTableHeader title={"ATH (USD)"} />,
        accessor: "usd_ath",
        Cell: row => <span style={{ color: "blue" }}>${numberWithExpressive(row.value)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "ATH (BTC)",
        Header: () => <CustomTableHeader title={"ATH (BTC)"} />,
        accessor: "btc_ath",
        Cell: row => <span style={{ color: "blue" }}>${numberWithExpressive(row.value)}Ƀ</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "ATH (ETH)",
        Header: () => <CustomTableHeader title={"ATH (ETH)"} />,
        accessor: "eth_ath",
        Cell: row => <span style={{ color: "blue" }}>${numberWithExpressive(row.value)}Ξ</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Days since ATH (USD)",
        Header: () => <CustomTableHeader title={"Days since ATH (USD)"} />,
        accessor: "days_ath_usd",
        Cell: row => <span>{numberWithCommasDecimals(row.value)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Days since ATH (BTC)",
        Header: () => <CustomTableHeader title={"Days since ATH (BTC)"} />,
        accessor: "days_ath_btc",
        Cell: row => <span>{numberWithCommasDecimals(row.value)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Days since ATH (ETH)",
        Header: () => <CustomTableHeader title={"Days since ATH (ETH)"} />,
        accessor: "days_ath_eth",
        Cell: row => <span>{numberWithCommasDecimals(row.value)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "ATH/Current Price (USD)",
        Header: () => <CustomTableHeader title={"ATH/Current Price (USD)"} />,
        accessor: "current_div_ath_usd",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 2)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "ATH/Current Price (BTC)",
        Header: () => <CustomTableHeader title={"ATH/Current Price (BTC)"} />,
        accessor: "current_div_ath_btc",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 2)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "ATH/Current Price (ETH)",
        Header: () => <CustomTableHeader title={"ATH/Current Price (ETH)"} />,
        accessor: "current_div_ath_eth",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 2)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "ATL (USD)",
        Header: () => <CustomTableHeader title={"ATL (USD)"} />,
        accessor: "usd_atl",
        Cell: row => <span>${numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "ATL (BTC)",
        Header: () => <CustomTableHeader title={"ATL (BTC)"} />,
        accessor: "btc_atl",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}Ƀ</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "ATL (ETH)",
        Header: () => <CustomTableHeader title={"ATL (ETH)"} />,
        accessor: "eth_atl",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}Ξ</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Days since ATL (USD)",
        Header: () => <CustomTableHeader title={"Days since ATL (USD)"} />,
        accessor: "days_atl_usd",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Days since ATL (BTC)",
        Header: () => <CustomTableHeader title={"Days since ATL (BTC)"} />,
        accessor: "days_atl_btc",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Days since ATL (ETH)",
        Header: () => <CustomTableHeader title={"Days since ATL (ETH)"} />,
        accessor: "days_atl_eth",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "ATL/Current Price (USD)",
        Header: () => <CustomTableHeader title={"ATL/Current Price (USD)"} />,
        accessor: "atl_div_current_usd",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "ATL/Current Price (BTC)",
        Header: () => <CustomTableHeader title={"ATL/Current Price (BTC)"} />,
        accessor: "atl_div_current_btc",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "ATL/Current Price (ETH)",
        Header: () => <CustomTableHeader title={"ATL/Current Price (ETH)"} />,
        accessor: "atl_div_current_eth",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Price change (7days) USD",
        Header: () => <CustomTableHeader title={"Weekly Price change % (USD)"} />,
        accessor: "week_usd_change",
        Cell: row => <span style={{ color: row.value >= 0 ? "green" : "red" }}>{numberWithCommasDecimals(row.value, 2)}%</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Price change (7days) BTC",
        Header: () => <CustomTableHeader title={"Weekly Price change % (btc)"} />,
        accessor: "week_btc_change",
        Cell: row => <span style={{ color: row.value >= 0 ? "green" : "red" }}>{numberWithCommasDecimals(row.value, 2)}%</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Price change (7days) ETH",
        Header: () => <CustomTableHeader title={"Weekly Price change % (ETH)"} />,
        accessor: "week_eth_change",
        Cell: row => <span style={{ color: row.value >= 0 ? "green" : "red" }}>{numberWithCommasDecimals(row.value, 2)}%</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Mayer Multiple (USD)",
        Header: () => <CustomTableHeader title={"Mayer Multiple (USD)"} />,
        accessor: "mayer_multiple_usd",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Mayer Multiple (BTC)",
        Header: () => <CustomTableHeader title={"Mayer Multiple (BTC)"} />,
        accessor: "mayer_multiple_btc",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Mayer Multiple (ETH)",
        Header: () => <CustomTableHeader title={"Mayer Multiple (ETH)"} />,
        accessor: "mayer_multiple_eth",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "30 days ratio (USD) Last 30d price avg / Past 30d price avg",
        Header: () => <CustomTableHeader title={"30 days ratio (USD) Last 30d price avg / Past 30d price avg"} />,
        accessor: "last30_div_past30_usd",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "30 days ratio (BTC) Last 30d price avg / Past 30d price avg",
        Header: () => <CustomTableHeader title={"30 days ratio (BTC) Last 30d price avg / Past 30d price avg"} />,
        accessor: "last30_div_past30_btc",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "30 days ratio (ETH) Last 30d price avg / Past 30d price avg",
        Header: () => <CustomTableHeader title={"30 days ratio (ETH) Last 30d price avg / Past 30d price avg"} />,
        accessor: "last30_div_past30_eth",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "60 days ratio (USD) Last 60d price avg / Past 60d price avg",
        Header: () => <CustomTableHeader title={"60 days ratio (USD) Last 60d price avg / Past 60d price avg"} />,
        accessor: "last60_div_past60_usd",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "60 days ratio (BTC) Last 60d price avg / Past 60d price avg",
        Header: () => <CustomTableHeader title={"60 days ratio (BTC) Last 60d price avg / Past 60d price avg"} />,
        accessor: "last60_div_past60_btc",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "60 days ratio (ETH) Last 60d price avg / Past 60d price avg",
        Header: () => <CustomTableHeader title={"60 days ratio (ETH) Last 60d price avg / Past 60d price avg"} />,
        accessor: "last60_div_past60_eth",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "120 days ratio (USD) Last 120d price avg / Past 120d price avg",
        Header: () => <CustomTableHeader title={"120 days ratio (USD) Last 120d price avg / Past 120d price avg"} />,
        accessor: "last120_div_past120_usd",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "120 days ratio (BTC) Last 120d price avg / Past 120d price avg",
        Header: () => <CustomTableHeader title={"120 days ratio (BTC) Last 120d price avg / Past 120d price avg"} />,
        accessor: "last120_div_past120_btc",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "120 days ratio (ETH) Last 120d price avg / Past 120d price avg",
        Header: () => <CustomTableHeader title={"120 days ratio (ETH) Last 120d price avg / Past 120d price avg"} />,
        accessor: "last120_div_past120_eth",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "1 year ratio (USD) Last year price avg / Past year price avg",
        Header: () => <CustomTableHeader title={"1 year ratio (USD) Last year price avg / Past year price avg"} />,
        accessor: "lastyear_div_pastyear_usd",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "1 year ratio (BTC) Last year price avg / Past year price avg",
        Header: () => <CustomTableHeader title={"1 year ratio (BTC) Last year price avg / Past year price avg"} />,
        accessor: "lastyear_div_pastyear_btc",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "1 year ratio (ETH) Last year price avg / Past year price avg",
        Header: () => <CustomTableHeader title={"1 year ratio (ETH) Last year price avg / Past year price avg"} />,
        accessor: "lastyear_div_pastyear_eth",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Buy Support 1%",
        Header: () => <CustomTableHeader title={"Buy Support 1%"} />,
        accessor: "buy_support_1",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Buy Support 2%",
        Header: () => <CustomTableHeader title={"Buy Support 2%"} />,
        accessor: "buy_support_2",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Buy Support 3%",
        Header: () => <CustomTableHeader title={"Buy Support 3%"} />,
        accessor: "buy_support_3",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Buy Support 4%",
        Header: () => <CustomTableHeader title={"Buy Support 4%"} />,
        accessor: "buy_support_4",
        Cell: row => <span>${numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Buy Support 5%",
        Header: () => <CustomTableHeader title={"Buy Support 5%"} />,
        accessor: "buy_support_5",
        Cell: row => <span>${numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Buy Support 10%",
        Header: () => <CustomTableHeader title={"Buy Support 10%"} />,
        accessor: "buy_support_10",
        Cell: row => <span>${numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Buy Support 15%",
        Header: () => <CustomTableHeader title={"Buy Support 15%"} />,
        accessor: "buy_support_15",
        Cell: row => <span>${numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Sell Support 1%",
        Header: () => <CustomTableHeader title={"Sell Support 1%"} />,
        accessor: "sell_support_1",
        Cell: row => <span>${numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Sell Support 2%",
        Header: () => <CustomTableHeader title={"Sell Support 2%"} />,
        accessor: "sell_support_2",
        Cell: row => <span>${numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Sell Support 3%",
        Header: () => <CustomTableHeader title={"Sell Support 3%"} />,
        accessor: "sell_support_3",
        Cell: row => <span>${numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Sell Support 4%",
        Header: () => <CustomTableHeader title={"Sell Support 4%"} />,
        accessor: "sell_support_4",
        Cell: row => <span>${numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Sell Support 5%",
        Header: () => <CustomTableHeader title={"Sell Support 5%"} />,
        accessor: "sell_support_5",
        Cell: row => <span>${numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Sell Support 10%",
        Header: () => <CustomTableHeader title={"Sell Support 10%"} />,
        accessor: "sell_support_10",
        Cell: row => <span>${numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Sell Support 15%",
        Header: () => <CustomTableHeader title={"Sell Support 15%"} />,
        accessor: "sell_support_15",
        Cell: row => <span>${numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Buy 10%/Sell 10%",
        Header: () => <CustomTableHeader title={"Buy 10%/Sell 10%"} />,
        accessor: "buy_div_sell_10",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Buy 5%/Sell 5%",
        Header: () => <CustomTableHeader title={"Buy 5%/Sell 5%"} />,
        accessor: "buy_div_sell_5",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "Buy Support 10% / Marketcap",
        Header: () => <CustomTableHeader title={"Buy Support 10% / Marketcap"} />,
        accessor: "buy_10_div_mcap",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "(Buy 10%/Sell 10%)^2 * (Buy 10%/Marketcap)",
        Header: () => <CustomTableHeader title={"(Buy 10%/Sell 10%)^2 * (Buy 10%/Marketcap)"} />,
        accessor: "amir_liquidity_metric",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }, {
        label: "(Buy 10%-Sell 10%) / (Buy 10%+Sell 10%)",
        Header: () => <CustomTableHeader title={"(Buy 10%-Sell 10%) / (Buy 10%+Sell 10%)"} />,
        accessor: "andrey_liquidity_metric",
        Cell: row => <span>{numberWithCommasDecimals(row.value, 6)}</span>,
        sortMethod: (a, b) => a - b,
        width: "7%"
    }
];

