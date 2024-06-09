/* eslint-disable react/prop-types */
const Card = ({ title, intro, amount, color }) => {
  const currency = title === "Sales" || title === "Profit";
  return (
    <div
      className={`${color} flex w-full  items-center justify-between rounded-lg p-4 lg:w-[48%]  `}
    >
      <div className="flex flex-col gap-3 ">
        <h1 className="text-xl font-bold">{title}</h1>
        <span className="font-semibold text-m text-gray-400">{intro}</span>
      </div>
      <h1 className="text-3xl font-bold">
        {currency ? "$" : ""}
        {amount}
      </h1>
    </div>
  );
};

export default Card;
