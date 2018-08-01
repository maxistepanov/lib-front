import React from 'react';
import isUrl from 'utils/isUrl';
import Link from 'react-router-dom/Link';
import styled from 'styled-components';

class MenuItem extends React.Component {
  render() {
    const { url, title } = this.props;

    return !isUrl(url) ? (
      <Item to={url}>{title}</Item>
    ) : (
      <a href={`//${url}`}>{title}</a>
    );
  }
}

export default MenuItem;

const Item = styled(Link)`
  text-align: center;
  max-width: 180px;
  padding: 5px;
  margin: 0 5px;
  text-decoration: none;
`;
