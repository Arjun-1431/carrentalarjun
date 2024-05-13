import { useTheme } from '@mui/material/styles';
import { LineChart, axisClasses } from '@mui/x-charts';
import create from 'zustand';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useEventDataStore = create((set) => ({
  events: [],
  loading: true,
  setLoading: (isLoading) => set({ loading: isLoading }),
  setEvents: (eventsData) => set({ events: eventsData }),
}));

export default function Chart() {
  const theme = useTheme();
  const { loading, setLoading, setEvents } = useEventDataStore();
  const [totalUsers, setTotalUsers] = useState(0);
  const [last30DaysData, setLast30DaysData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/totaluser')
      .then(response => {
        setTotalUsers(response.data.totalUsers); // Set total users count
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (!loading) {
      // Generate data for the current date and the total number of users
      const data = [];
      const currentDate = new Date();
      const currentDateNumber = currentDate.getDate();
      const totalUserPerDay = totalUsers / currentDateNumber;

      for (let i = 1; i <= currentDateNumber; i++) {
        const users = Math.floor(totalUserPerDay * i); // Distribute total users evenly across days
        data.push({ time: users, users: i });
      }

      setLast30DaysData(data);
    }
  }, [loading, totalUsers]);

  const renderChart = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    if (last30DaysData.length === 0) {
      return <div>No data available</div>;
    }

    return (
      <LineChart
        dataset={last30DaysData}
        margin={{
          top: 16,
          right: 20,
          left: 70,
          bottom: 30,
        }}
        xAxis={[
          {
            scaleType: 'linear',
            dataKey: 'time',
            domain: [1, 50], // Adjust x-axis domain to range from 1 to 50
            tickNumber: 10,
            tickLabelStyle: theme.typography.body2,
            label: 'Number of Users',
            labelStyle: {
              ...theme.typography.body1,
              fill: theme.palette.text.primary,
            },
          },
        ]}
        yAxis={[
          {
            scaleType: 'linear',
            dataKey: 'users',
            domain: [1, 30], // Adjust y-axis domain to range from 1 to 30
            tickNumber: 10,
            tickLabelStyle: theme.typography.body2,
            label: 'Days',
            labelStyle: {
              ...theme.typography.body1,
              fill: theme.palette.text.primary,
            },
          },
        ]}
        series={[
          {
            dataKey: 'users',
            showMark: false,
            color: theme.palette.primary.light,
          },
        ]}
        sx={{
          [`.${axisClasses.root} line`]: { stroke: theme.palette.text.secondary },
          [`.${axisClasses.root} text`]: { fill: theme.palette.text.secondary },
          [`& .${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translateX(-25px)',
          },
        }}
      />
    );
  };

  return (
    <React.Fragment>
      <h5>User Register Graph</h5>
      <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
        <div>Total Users: {totalUsers}</div> {/* Display total users count */}
        {renderChart()}
      </div>
    </React.Fragment>
  );
}
