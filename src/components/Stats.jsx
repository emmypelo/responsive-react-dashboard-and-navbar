import Title from "./Title";
import { statsData } from "../data/data";

const Stats = () => {
  return (
    <div className="rounded-lg bg-white p-4">
      <Title>Statistics</Title>
      <div className="flex justify-between rounded-lg bg-red-50 p-10">
        {statsData.map((item) => (
          <div key={item.title} className="flex flex-col items-center gap-3">
            <span className="flex h-12 w-12 justify-center p-2 rounded-full bg-red-100 items-center ">
              <item.icon />
            </span>
            <span>{item.title}</span>
            <h1>{item.value}</h1>
            <span>{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
