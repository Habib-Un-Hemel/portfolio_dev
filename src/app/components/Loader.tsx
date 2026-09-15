const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6 bg-[#f0f2f5] dark:bg-[#1f2937] transition-colors">
      <div className="text-2xl font-bold">
        <span className="text-primary text-4xl">Hemel</span>
        <span className="text-xl">.INTP</span>
      </div>
      <div className="h-10 w-10 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
    </div>
  );
};

export default Loader;
