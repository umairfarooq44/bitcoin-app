import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
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
    // Checking if data is not available then fetch it
    if (data.length === 0) {
      getData();
    }
  }, []);

  useEffect(() => {
    // setting state after data is fetched
    setGraphData(data);
  }, [data]);

  // Function to apply filters
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
  data: PropTypes.array, // array containing data
  getData: PropTypes.func, // Redux action to fetch graph data
};

const mapStateToProps = ({ graphData }) => ({
  data: graphData,
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getgraphDataAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BCHGraph);
