const Container = ({ children }) => {
  return (
    <div className="w-full max-w-[1280px] max-xl:max-w-[1320px] mx-auto">
      {children}
    </div>
  );
};

export default Container;
