import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import { ClassDistribution } from '../../@types';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type PropsType = {
  distribution: ClassDistribution;
};

const PieChart = ({ distribution }: PropsType) => {
  const options: ApexOptions = {
    chart: {
      width: '100%',
    },
    labels: Object.keys(distribution),
  };

  const series = Object.values(distribution).map((item) => +item.replace('%', ''));

  return (
    <Box>
      <ApexChart options={options} series={series} type="donut" height="300" />
    </Box>
  );
};

export default PieChart;
