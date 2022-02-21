import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoAPI'
import { CryptoCurrencies, News } from '../components'

const { Title } = Typography

const Homepage = () => {
    const { data, isFetching }: any = useGetCryptosQuery(10)
    console.log(data)
    const globalStats = data?.data?.stats

    if (isFetching) return <p>Loading ...</p>
    return (
        <>
            <Title level={2} className='heading'>Global Crypto Stats</Title>
            <Row>
                <Col span={12}>
                    <Statistic title="Total Cryptocurrencies" value={globalStats?.total} />
                </Col>
                <Col span={12}>
                    <Statistic title="Total Exchanges" value={globalStats?.totalExchanges} />
                </Col>
                <Col span={12}>
                    <Statistic title="Total Marketcap" value={globalStats?.totalMarketCap} />
                </Col>
                <Col span={12}>
                    <Statistic title="Total 24hrs volume" value={globalStats?.total24hVolume} />
                </Col>
                <Col span={12}>
                    <Statistic title="Total Market" value={globalStats?.totalMarkets} />
                </Col>
            </Row>
            <div className='home-heading-container'>
                <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
                <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
            </div>
            <CryptoCurrencies simplified />
            <div className='home-heading-container'>
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
            </div>
            <News simplified />
        </>
    )
}
export default Homepage