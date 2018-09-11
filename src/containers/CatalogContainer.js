import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class CatalogContainer extends React.Component {
  render() {
    return <div>CatalogContainer</div>;
  }
}

const mapDispatchToProps = (dispatch) => ({});
const mapStateToProps = (state) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CatalogContainer);
