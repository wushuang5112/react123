import { Row, Col } from 'antd';
import React from 'react'
import NavLeft from './components/NavLeft'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/home';
import './style/common.less';


export default class Admin extends React.Component {
    render() {
        return (
            <Row className="container">
                <Col span="3" className="nav-left">
                    <NavLeft />
                </Col>
                <Col span="21" className="main">
                    <Header />
                    <Row className="content">
                        {/* Content */}
                        <Home />
                        {/* {this.props.children} */}
                    </Row>
                    <Footer />
                </Col>
            </Row>
        );
    }
}