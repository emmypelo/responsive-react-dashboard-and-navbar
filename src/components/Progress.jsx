import Title from "./Title";
import { progressData } from "../data/data";
import Card from "./Card";

const Progress = () => {
  return (
    <div className="rounded-md bg-white p-4  ">
      <Title>Progress</Title>
      <div className="flex  flex-wrap gap-4 ">
        {progressData.map((item) => (
          <Card title={item.title} intro={item.intro} amount={item.amount} color={item.color} key={item.title}/>
        ))}
      </div>
    </div>
  );
};

export default Progress;
