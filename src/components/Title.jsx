// eslint-disable-next-line react/prop-types
const Title = ({ children }) => {
  return (
    <div className="mb-4 inline-block ">
      <h1 className=" cursor-default border-b-2 border-slate-300 pb-3 text-2xl font-semibold text-slate-700 ease-in-out hover:border-blue-400 duration-700 transition-all ">
        {children}
      </h1>
    </div>
  );
};

export default Title;
