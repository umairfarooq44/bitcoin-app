import React from 'react';
import PropTypes from 'prop-types';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Components
import Heading from '../ui/Heading';

const BCHGraphComp = ({ data }) => {
  return (
    <div>
      <Heading>Market Activity</Heading>
      <ResponsiveContainer width="99%" height={400}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="price" stroke="#0ac18e" fill="#70928E" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

BCHGraphComp.propTypes = {
  data: PropTypes.array, // Prop containing graph data
};

export default BCHGraphComp;
