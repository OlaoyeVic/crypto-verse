import { Typography, Select, Row, Col, Card, Avatar } from 'antd'
import { captureRejectionSymbol } from 'events'
import moment from 'moment'
import React from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const { Title, Text } = Typography
const { Option } = Select

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'

const News = ({ simplified }: any) => {
    const [newsCategory, setNewsCategory] = React.useState('Cryptocurrency')
    const { data } = useGetCryptoNewsQuery(100)
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 })

    console.log(cryptoNews)

    if (!cryptoNews?.value) return <p>Loading...</p>

    return (
        <Row gutter={[24, 24]}>
            {!simplified && (
                <Col span={24}>
                    <Select
                        showSearch
                        className='select-menu'
                        placeholder='select a crypto'
                        optionFilterProp='children'
                        onChange={(value) => console.log(value)}
                    // filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value='Cryptocurrency'>Cryptocurrency</Option>
                        {data?.data?.coins.map((coin: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined }) => <Option value={coin.name}>{coin.name}</Option>)}
                    </Select>
                </Col>
            )}
            {cryptoNews?.value?.map((news: any, i: any) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className='news-image-container'>
                                <Title className='news-title' level={4}>
                                    {news.name}
                                </Title>
                                <img
                                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                                    alt="news"
                                    style={{ maxWidth: '200px', maxHeight: '100px' }} />
                            </div>
                            <p>{news.description > 100 ? `${news.description.substring(0, 100)}` : news.description}</p>
                            <div className='provider-container'>
                                <div>
                                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                                    <Text className='provider-name'>{news.provider[0]?.name}</Text>
                                </div>
                                <Text>{moment(news.datePublished).startOf('second').fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}
export default News