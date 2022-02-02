import React from 'react'
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom'
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
                        <Switch>
                            <Route path="/">
                                <Homepage />
                            </Route>
                            <Route path="/crypto/:coinId">
                                <CryptoCurrencies />
                            </Route>
                            <Route path="/news">
                                <News />
                            </Route>
                            <Route path="/cryptodetails">
                                <CryptoDetails />
                            </Route>
                        </Switch>
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