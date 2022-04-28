import React from 'react'
import HTMLReactParser from 'html-react-parser'
import { connect } from 'react-redux'
import millify from 'millify'
import { Col, Row, Typography, Select } from 'antd'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, ThunderboltOutlined, NumberOutlined } from '@ant-design/icons'
import { useParams } from 'react-router-dom'
import { useGetCryptoDetailsQuery } from '../services/cryptoAPI'

const { Title, Text } = Typography
const { Option } = Select

const CryptoDetails = () => {
    const { coinId } = useParams()
    const [timePeriod, setTimePeriod] = React.useState('7d')
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId)
    // console.log(data)
    const { data: coinHistory } = useGetCryptoDetailsQuery({ coinId, timePeriod })
    const cryptoDetails = data?.data?.coin

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y']

    const stats = [
        { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
        { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
        { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <ThunderboltOutlined /> },
        { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
        { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
    ]

    return (
        <Col className='coin-detail-container'>
            <Col className='coin-heading-container'>
                <Title level={2} className='coin-name'>
                    {cryptoDetails.name} ({cryptoDetails})
                </Title>
            </Col>
        </Col>
    )
}
export default CryptoDetails