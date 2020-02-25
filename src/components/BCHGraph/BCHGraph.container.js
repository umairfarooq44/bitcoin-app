import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import getgraphDataAction from '../../actions/graphActions';
import BCHGraphComp from './BCHGraph.component';
import Btn from '../ui/Button';

const Button = styled(Btn)`
  margin-right: 10px;
`;
const ButtonContainer = styled.div`
  text-align: center;
`;

const BCHGraph = ({ data, getData }) => {
  const [graphData, setGraphData] = useState([]);
  const [filter, setFilter] = useState(null);
  useEffect(() => {
    if (data.length === 0) {
      getData();
    }
  }, []);

  useEffect(() => {
    setGraphData(data);
  }, [data]);

  const handleFilterChange = filterName => () => {
    if (filterName !== filter) {
      setFilter(filterName);
      let days = 0;
      if (filterName === '24hr') {
        days = 2;
      }
      if (filterName === 'week') {
        days = 8;
      }
      if (filterName === 'month') {
        days = 31;
      }
      const currentDate = new Date();
      const expectedDate = new Date();
      expectedDate.setDate(currentDate.getDate() - days);
      const filteredData = data.filter(({ tzDate }) => {
        return new Date(tzDate) >= expectedDate;
      });

      setGraphData(filteredData);
    } else {
      setGraphData(data);
      setFilter(null);
    }
  };

  return (
    <div>
      <BCHGraphComp data={graphData} />
      <ButtonContainer>
        <Button onClick={handleFilterChange('24hr')} active={filter === '24hr'}>
          24 hours
        </Button>
        <Button onClick={handleFilterChange('week')} active={filter === 'week'}>
          7 days
        </Button>
        <Button onClick={handleFilterChange('month')} active={filter === 'month'}>
          1 month
        </Button>
      </ButtonContainer>
    </div>
  );
};

BCHGraph.propTypes = {
  data: PropTypes.array,
  getData: PropTypes.func,
};

const mapStateToProps = ({ graphData }) => ({
  data: graphData,
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getgraphDataAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BCHGraph);
