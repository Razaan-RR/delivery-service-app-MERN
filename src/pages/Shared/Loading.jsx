function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-500 animate-spin"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
          </div>
        </div>

        <p className="text-gray-700 font-medium tracking-wide animate-pulse text-lg">
          Loading...
        </p>
      </div>
    </div>
  );
}

export default Loading;
