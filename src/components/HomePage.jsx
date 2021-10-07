import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import { useGetCryptosQuery } from '../services/cryptoApi'

import { Cryptocurrencies, News } from '../components'

const { Title } = Typography; 

export default function HomePage() {

  const { data, isFetching } = useGetCryptosQuery(10)
  const globalStatus = data?.data?.stats;

  if (isFetching) return <Loader />



  console.log(data);

  return (
    <>
      <Title level={2} className="heading">Crypto Status</Title>
      <Row>
        <Col span={12}><Statistic title="Total CryptoCurrencies" value={millify(globalStatus.total)} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStatus.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStatus.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStatus.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Crytocurrencies" value={millify(globalStatus.totalMarkets)} /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Crypto Currencies In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified={true} />
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto Currencies News</Title>
        <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
      </div>
      <News simplified={true} />
    </>
  )
}
