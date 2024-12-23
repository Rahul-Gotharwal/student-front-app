import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/sidebar";
import Contentarea from "../ContentArea/Contentarea";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../../features/studentAPI";
import {ClipLoader} from "react-spinners"
const MainComp = () => {
  const dispatch = useDispatch();
  const {
    list: courses,
    status,
    error,
  } = useSelector((state) => state.courses);
 
  const [className, setClassName] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(true); 
  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  
  const handleClassNameChange = (e) => {
    setClassName(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleFetchData = () => {
    if (!className || !year) {
      alert("Please select both the year and the class name.");
      return;
    }
    setLoading(true)
    dispatch(fetchStudents(className,year))
  };
 useEffect(() => {
  if (status === "succeeded" || status === "failed") {
    setLoading(false); 
  }
}, [status]);
  if (status === "loading" || loading) {
    return (
      <div className="loader-container">
        <ClipLoader size={80} color={"#123abc"} loading={true} /> 
      </div>
    );
  }
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="relative w-full h-screen  bg-[#F6F8FA] opacity-100">
   
      <div className="flex">
    
        <Sidebar />
        <div className=" flex flex-col">

          <Navbar />

          <div className="mt-10 ml-4">
            <Contentarea
              courses={courses}
              className={className}
              year={year}
              onClassNameChange={handleClassNameChange}
              onYearChange={handleYearChange}
              onFetchData={handleFetchData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComp;
