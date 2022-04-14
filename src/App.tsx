import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Navbar, Homepage, CryptoCurrencies, News, CryptoDetails } from './components'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route path="/" element={<Homepage />} />
                            <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
                            <Route path="/news" element={<News />} />
                            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                            {/* <Route path="/exchanges" element={<Exchanges />} /> */}
                        </Routes>
                    </div>
                </Layout>
                <div className="footer">
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        CryptoVerse <br />
                        All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}
export default App