"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

const TopLoadingBar = () => {
  const pathname = usePathname();
  const [progress, setProgress] = useState(20);
  useEffect(() => {
    setProgress((prev) => prev + 100);
  }, [pathname]);
  return (
    <div>
      <LoadingBar
        color="#000"
        progress={progress}
        transitionTime={100}
        waitingTime={800}
        height={3}
        onLoaderFinished={() => setProgress(0)}
      />
    </div>
  );
};

export default TopLoadingBar;
