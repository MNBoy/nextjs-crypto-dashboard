/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import moment from 'moment';

import { AnimatedLineSeries, XYChart } from '@visx/xychart';

const LineChart = ({ height, color, coin }) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const chartRes = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=1`
      );
      if (chartRes.ok) {
        const chartData = await chartRes.json();
        const mappedData = await chartData.prices.map((item) => {
          const date = new Date(item[0]);
          return {
            x: moment(date).format(),
            y: Number(item[1].toFixed(2)),
          };
        });
        setDatas(mappedData);
      }
    };
    if (window.innerWidth > 600) {
      fetchData();
    }
  }, [coin]);

  const accessors = {
    xAccessor: (d) => d.x,
    yAccessor: (d) => d.y,
  };

  return (
    <XYChart
      height={height}
      margin={{ left: 0, top: 0, bottom: 0, right: 0 }}
      xScale={{ type: 'band' }}
      yScale={{ type: 'linear' }}
    >
      <AnimatedLineSeries stroke={color} dataKey='primary_line' data={datas} {...accessors} />
    </XYChart>
  );
};

export default LineChart;
