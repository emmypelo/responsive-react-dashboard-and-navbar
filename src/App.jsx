import AppLayout from "./components/AppLayout";
import Navbar from "./components/Navbar";
import Progress from "./components/Progress";
import Stats from "./components/Stats";
import SalesRevenue from "./components/SalesRevenue";
import Chart from "./components/Chart";

const App = () => {
  return (
    <AppLayout>
      <Navbar />
      <div className="flex flex-col items-start gap-3 md:flex-row mt-16 md:mt-20">
        <div className="flex w-full flex-col gap-3">
          <Progress />
          <Stats />
        </div>
        <div className="flex w-full flex-col gap-3 border-2 md:w-[500px] ">
          <SalesRevenue />
          <Chart />
        </div>
      </div>
    </AppLayout>
  );
};

export default App;
