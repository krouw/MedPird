import React from 'react';
import {Row,Col} from 'react-flexbox-grid';
import Header from '../components/Header/Header';

const Layout = props => {
  return (
    <section className="Layout">
      <Header />
      <Row className="Content" center="xs">
        <Col xs={11} sm={10}>
          {props.children}
        </Col>
      </Row>
    </section>
  );
}


export default Layout;
