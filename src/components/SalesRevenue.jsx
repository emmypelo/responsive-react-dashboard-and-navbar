import { salesData } from "../data/data";
import Title from "./Title";

const SalesRevenue = () => {
  return (
    <div className="flex-1 rounded-lg bg-white p-4 ">
      <Title>Sales Revenue</Title>
      <div className="roended-lg bg-slate-100 p-4 ">
        {salesData.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between  gap-3 py-2 "
          >
            <div className=" flex items-center gap-2 rounded-lg">
              <item.icons className=" rounded-full bg-slate-600 p-2 text-3xl font-bold text-white"/>
              <h1 className="font-semibold text-slate-500 ">{item.title}</h1>
            </div>
            <span className="text-slate-700 ">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesRevenue;
