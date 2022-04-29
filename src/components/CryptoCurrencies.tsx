import React, { useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoAPI'

const CryptoCurrencies = ({ simplified }: any) => {
    const count = simplified ? 10 : 100
    const { data: cryptosList, isFetching }: any = useGetCryptosQuery(count)
    const [cryptos, setCryptos] = React.useState([])
    console.log(cryptos)
    const [searchTerm, setSearchTerm] = React.useState('')

    useEffect(() => {
        const filteredData = cryptosList?.data?.coins.filter((coin: any) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setCryptos(filteredData)
    }, [cryptosList, searchTerm])

    if (isFetching) return <p>Loading ...</p>
    return (
        <div>
            {!simplified && (
                <div className='search-crypto'>
                    <input placeholder='search cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
            )}
            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map((currency: any) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
                        <Link to={`/crypto/${currency.uuid}`} key={currency.uuid}>
                            <Card
                                title={`${currency.rank}. ${currency.name}`}
                                extra={<img className="crypto-image"
                                    src={currency.iconUrl} />}
                                hoverable>
                                <p>Price: {millify(currency.price)}</p>
                                <p>MarketCap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {millify(currency.change)}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
export default CryptoCurrencies