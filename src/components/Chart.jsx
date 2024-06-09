import ReactApexChart from "react-apexcharts";
import { salesData } from "../data/data";

const Chart = () => {
  const categories = salesData.map((item) => item.title);
  const values = salesData.map(
    (item) => parseInt(item.value.replace("k", "")) * 1000
  );

  const series = [{ name: "Value", data: values }];
  const options = {
    chart: {
      // type: "bar",
      // height: "350",
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: categories,
    },
    tooltip: {
      y: {
        formatter: {
          function(val, opts) {
            return `${val.toLocaleString()}`;
          },
        },
      },
    },
  };
  return (
    <div className="rounded-lg bg-white p-4">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      
      />
    </div>
  );
};

export default Chart;
