import React from 'react';
import styled from 'styled-components';
import bibl from '../assets/img/bibliograph2.png';
import udk from '../assets/img/Udk2.png';
import dspace from '../assets/img/dspace3.jpg';
import dspace2 from '../assets/img/dspace4.jpg';
import web from '../assets/img/web.png';
import baner from '../assets/img/baner2.png';
import logo from '../assets/img/logo-news.gif';
import hneu from '../assets/img/hneu.png';
import uran from '../assets/img/uran.jpg';
import eu from '../assets/img/EU2.png';

class RightSidebar extends React.Component {
  render() {
    return (
      <Wrapper>
        <Item>
          <a href="/service/question">
            <img src={bibl} alt="Запитай у бібліографа" />
          </a>
        </Item>
        <Item>
          <a href="/service/udc">
            <img src={udk} alt="Запитай у бібліографа" />
          </a>
        </Item>
        <Item>
          <a href="http://www.repository.hneu.edu.ua/">
            <img src={dspace} alt="Запитай у бібліографа" />
          </a>
        </Item>
        <Item>
          <a href="#">
            <img src={dspace2} alt="Запитай у бібліографа" />
          </a>
        </Item>
        <Item>
          <a href="#">
            <img src={web} alt="Запитай у бібліографа" />
          </a>
        </Item>
        <Item>
          <a href="#">
            <img src={baner} alt="Запитай у бібліографа" />
          </a>
        </Item>
        <Item>
          <a href="https://www.dpa-news.de">
            <img src={logo} alt="Запитай у бібліографа" />
          </a>
        </Item>
        <Item>
          <a href="http://www.hneu.edu.ua/">
            <img src={hneu} alt="Запитай у бібліографа" />
          </a>
        </Item>
        <Item>
          <a href="http://uran.ua/">
            <img src={uran} alt="Запитай у бібліографа" />
          </a>
        </Item>
        <Item>
          <a href="http://eeas.europa.eu/delegations/ukraine/index_uk.htm">
            <img src={eu} alt="Запитай у бібліографа" />
          </a>
        </Item>
      </Wrapper>
    );
  }
}

export default RightSidebar;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const Item = styled.div`
  margin: 5px 0;
  a {
    img {
      width: 100%;
    }
  }
`;
