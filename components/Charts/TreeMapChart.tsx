import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const TreeMapChart = () => {
  const options: ApexOptions = {
    legend: {
      show: false,
    },
    chart: {
      height: 350,
      type: "treemap",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "12px",
      },
      offsetY: -4,
    },
    stroke: {
      width: 1,
    },
    plotOptions: {
      treemap: {
        enableShades: true,
        shadeIntensity: 0.5,
        reverseNegativeShade: true,
        colorScale: {
          ranges: [
            {
              from: 20,
              to: 34,
              color: "#6B8E23",
            },
            {
              from: 51,
              to: 60,
              color: "#E5B132",
            },
            {
              from: 1,
              to: 10,
              color: "#3E6B52",
            },
            {
              from: 11,
              to: 19,
              color: "#D32D42",
            },
          ],
        },
      },
    },
  };

  const series = [
    {
      data: [
        {
          x: "Vegetation",
          y: 31.89,
        },
        {
          x: "Water",
          y: 0.01,
        },
        {
          x: "Land",
          y: 51.27,
        },
        {
          x: "Road",
          y: 4.68,
        },
        {
          x: "Building",
          y: 12.15,
        },
        {
          x: "Unlabeled",
          y: 0,
        },
      ],
    },
  ];

  return (
    <Box>
      <ApexChart
        options={options}
        series={series}
        type="treemap"
        height="200"
      />
    </Box>
  );
};

export default TreeMapChart;
