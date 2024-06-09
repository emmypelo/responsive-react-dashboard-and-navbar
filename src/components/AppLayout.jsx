
// eslint-disable-next-line react/prop-types
const AppLayout = ({ children }) => {
  return (
    <main className="flex h-full w-full flex-col gap-3 bg-slate-200  transition-all duration-500 ease-in-out px-1">
      {children}
    </main>
  );
};

export default AppLayout;
