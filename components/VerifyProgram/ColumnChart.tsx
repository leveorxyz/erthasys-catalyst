import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import { ClassDistribution } from '../../@types';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type PropsType = {
  distribution: ClassDistribution;
};

const ColumnChart = ({ distribution }: PropsType) => {
  const { Vegetation, Water, Land, Road, Building, Unlabeled } = distribution;

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      width: '100%',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        distributed: true,
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
      categories: ['Vegetation', 'Water', 'Land', 'Road', 'Building', 'Unlabeled'],
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
    colors: [
      '#35675F',
      '#ACD113',
      '#1C3238',
      '#f48024',
      '#13d8aa',
      '#A5978B',
      '#2b908f',
      '#f9a3a4',
      '#69d2e7',
    ],
    legend: {
      show: false,
    },
  };
  const series = [
    {
      data: [Vegetation, Water, Land, Road, Building, Unlabeled].map(
        (item) => +item.replace('%', '')
      ),
    },
  ];

  return (
    <Box>
      <ApexChart options={options} series={series} type="bar" height="300" />
    </Box>
  );
};

export default ColumnChart;
