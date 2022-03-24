import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import moment from 'moment';

const CandleChart = ({ height, chartData }) => {
  const options = {
    series: [
      {
        name: 'candle',
        data: chartData,
      },
    ],

    chart: {
      height: height,
      type: 'candlestick',
    },
    tooltip: {
      enabled: true,
      theme: 'dark',
    },
    xaxis: {
      type: 'category',
      labels: {
        formatter: function (val) {
          return moment(val).format('MMM DD HH:mm');
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return <Chart options={options} series={options.series} type='candlestick' height={height} />;
};

export default CandleChart;
