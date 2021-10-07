import React, { useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card,  } from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Loader from './Loader'

const {Text, Title } = Typography
const { Option } = Select

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

export default function News({ simplified }) {

  const { data } = useGetCryptosQuery(100)
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory , count: simplified ? 6 : 15 })

  console.log(cryptoNews)
  if(!cryptoNews?.value) return <Loader />

  return (
    <Row gutter={[24, 24]}>
      { !simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="childern"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="Cryptocurriency">Cryptocurriency</Option>
              {
                data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)
              }
            </Select>
        </Col>
      )

      }
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card" style={{ height:'100%' }}>
            <a href={news.url} target="_blank" refs="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4} >{news.name}</Title>
                <img style={{ maxWidth: '200px', maxHeight: '100px'}} src={news?.image?.thumbnail?.contentUrl || demoImage}  alt="news"/>
              </div>
            </a>
            <p>
              {news.description > 100
                ? `${news.description.substring(0, 100)}...`
                :  news.description
              }
            </p>
            <div className="provider-container">
              <div>
                <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                <Text className="provider-name">{news.provider[0]?.name}</Text>
              </div>
              <Text>{moment(news.dataPublished).startOf('ss').fromNow()}</Text>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
