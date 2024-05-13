import { useTheme } from '@mui/material/styles';
import { LineChart, axisClasses } from '@mui/x-charts';
import create from 'zustand';
import React, { useEffect } from 'react';
import axios from 'axios';

const useEventDataStore = create((set) => ({
  events: [],
  loading: true,
  setLoading: (isLoading) => set({ loading: isLoading }),
  setEvents: (eventsData) => set({ events: eventsData }),
}));

export default function BookingChart() {
  const theme = useTheme();
  const { events, loading, setLoading, setEvents } = useEventDataStore();

  useEffect(() => {
    axios.get('http://localhost:5001/getallBookingDetail')
      .then(response => {
        const sortedEvents = response.data.sort((a, b) => new Date(a.enddate) - new Date(b.enddate));
        setEvents(sortedEvents);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, [setEvents, setLoading]);

  const renderChart = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    if (events.length === 0) {
      return <div>No data available</div>;
    }

    // Generate data based on end date and number of people
    const data = events.map(event => ({
      time: new Date(event.enddate).toLocaleDateString('en-US'), // Format time as 'MM/DD/YYYY'
      guests: Number(event.guestnumber), // Ensure guests data is converted to a number
    }));

    return (
      <LineChart
        dataset={data}
        margin={{
          top: 16,
          right: 20,
          left: 70,
          bottom: 30,
        }}
        xAxis={[
          {
            scaleType: 'point',
            dataKey: 'time',
            tickNumber: 7, // Adjust the number of ticks based on your preference
            tickLabelStyle: theme.typography.body2,
          },
        ]}
        yAxis={[
          {
            label: 'Number of Guests',
            labelStyle: {
              ...theme.typography.body1,
              fill: theme.palette.text.primary,
            },
            tickLabelStyle: theme.typography.body2,
            tickNumber: 5, // Adjust the number of ticks based on your preference
          },
        ]}
        series={[
          {
            dataKey: 'guests',
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
      <h5>Total Bookings by End Date</h5>
      <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
        {renderChart()}
      </div>
    </React.Fragment>
  );
}
