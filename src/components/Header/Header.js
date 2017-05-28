import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import './Header.css'

const Header = () => {

    return (
      <div>
        <Row center="xs" className="Header" style={{margin:0}}>
          <Col xs={11} sm={8} center="xs" style={{padding:0}}>
            <Row className="Header-Container" bottom="xs" start="xs">
              <Col xs={12} className="Header-Logo">
                <h2>MedPird</h2>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );

}

export default Header
