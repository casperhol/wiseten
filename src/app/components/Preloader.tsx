"use client";
import { useEffect, useState, ReactNode } from "react";
import ImageComponent from './formFields/ImageComponent';
import loaderImg from "@/app/assets/img/loader-1.gif";



interface PreloaderProps {
  children: ReactNode;
}

const Preloader = ({ children }: PreloaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoader = () => setIsLoading(false);

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoader);
    }

    return () => {
      window.removeEventListener("load", handleLoader);
    };
  }, []);

  return isLoading ? (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50">
      <ImageComponent src={loaderImg} alt="Loading..." width={100} height={100} className="" />
      <p className="mt-2 text-green-600 animate-pulse text-2xl">Loading...</p>
    </div>
  ) : (
    <>{children}</>
  );
};

export default Preloader;
