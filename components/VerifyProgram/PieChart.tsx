import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import { ClassDistribution } from '../../@types';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type PropsType = {
  distribution: ClassDistribution;
};

const PieChart = ({ distribution }: PropsType) => {
  const { Vegetation, Water, Land, Road, Building, Unlabeled } = distribution;
  const options: ApexOptions = {
    chart: {
      width: '100%',
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
    labels: ['Vegetation', 'Water', 'Land', 'Road', 'Building', 'Unlabeled'],
  };

  const series = [Vegetation, Water, Land, Road, Building, Unlabeled].map(
    (item) => +item.replace('%', '')
  );

  return (
    <Box>
      <ApexChart options={options} series={series} type="donut" height="300" />
    </Box>
  );
};

export default PieChart;
