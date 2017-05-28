import React from 'react';
import { Row,Col } from 'react-flexbox-grid';
import Header from '../components/Header/Header';
import Mediciones from '../containers/Mediciones/Mediciones'

const Layout = () => {
  return (
    <section className="Layout">
      <Header />
      <Row className="Content" center="xs">
        <Col xs={11} sm={7} style={{padding:0}}>
          <Mediciones />
        </Col>
      </Row>
    </section>
  );
}


export default Layout;
