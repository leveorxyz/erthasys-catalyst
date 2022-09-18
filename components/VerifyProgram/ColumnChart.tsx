import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import { ClassDistribution } from '../../@types';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type PropsType = {
  distribution: ClassDistribution;
};

const ColumnChart = ({ distribution }: PropsType) => {
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      width: '100%',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: Object.keys(distribution),
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val + '%';
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      show: false,
    },
  };
  const series = [
    {
      name: 'Distribution',
      data: Object.values(distribution).map((item) => +item.replace('%', '')),
    },
  ];

  return (
    <Box>
      <ApexChart options={options} series={series} type="bar" height="300" />
    </Box>
  );
};

export default ColumnChart;
