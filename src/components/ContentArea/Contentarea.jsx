import { ChevronDownIcon, PlusIcon, TextSearch } from "lucide-react";
import React, { useState } from "react";
import StudentDialog from "../StudentDialog/StudentPostData";
import * as Tooltip from '@radix-ui/react-tooltip';
const Contentarea = ({
  courses,
  className,
  year,
  onClassNameChange,
  onYearChange,
  onFetchData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const groupedStudents = {};

  courses.forEach((course) => {
    course.students.forEach((student) => {
      if (!groupedStudents[student.id]) {
        groupedStudents[student.id] = {
          ...student,
          courses: [course.courseName], 
        };
      } else {
        groupedStudents[student.id].courses.push(course.courseName);
      }
    });
  });
  const validClassOptions = {
    "2024-25": ["CBSE-9"],
    "2023-24": ["CBSE-10"],
    "2022-23": ["CBSE-11"],
  };
  return (
    <div className="absolute w-[1152px] max-h-[664px] overflow-y-auto top-[81px] left-[268px] gap-[10px] rounded-tl-[12px] bg-white">
    
      <div className="flex gap-[10px] p-[16px]">
     
        <div className="relative w-[149px] ml-4 h-[38px]">
          <select
            value={year}
            onChange={onYearChange}
            style={{ backgroundColor: "#E9EDF1" }}
            className="w-full h-full p-[7px_15px] pr-[40px] rounded-[6px] appearance-none text-[#3F526E] font-['Noto_Sans'] text-[14px]"
          >
            <option value=""> Select-Year</option>
            <option value="2024-25">2024-25</option>
            <option value="2023-24">2023-24</option>
            <option value="2022-23">2022-23</option>
          </select>
          <ChevronDownIcon className="absolute right-[10px] top-1/2 transform -translate-y-1/2 w-[24px] h-[24px] text-[#3F526E] pointer-events-none" />
        </div>

     
        <div className="relative w-[117px] h-[38px]">
          <select
            value={className}
            onChange={onClassNameChange}
            style={{ backgroundColor: "#E9EDF1" }}
            className="w-full h-full p-[7px_15px] pr-[40px] rounded-[6px] appearance-none text-[#3F526E] font-['Noto_Sans'] text-[14px]"
          >
            <option value="">Class</option>
            <option
              value="CBSE-9"
              disabled={year && !validClassOptions[year]?.includes("CBSE-9")}
            >
              CBSE 9
            </option>
            <option
              value="CBSE-10"
              disabled={year && !validClassOptions[year]?.includes("CBSE-10")}
            >
              CBSE 10
            </option>
            <option
              value="CBSE-11"
              disabled={year && !validClassOptions[year]?.includes("CBSE-11")}
            >
              CBSE 11
            </option>
          </select>
          <ChevronDownIcon className="absolute right-[10px] top-1/2 transform -translate-y-1/2 w-[24px] h-[24px] text-[#3F526E] pointer-events-none" />
        </div>
        <button
          onClick={onFetchData}
          style={{ backgroundColor: "#E9EDF1" }}
          className="ml-auto w-[197px] h-[36px] px-[10px] py-[7px] rounded-[6px] flex justify-center items-center gap-[8px]"
        >
          <TextSearch
            style={{ color: "#3F526E" }}
            className="w-[22px] h-[22px]"
          />
          <span className="font-['Noto_Sans'] text-[16px] font-[700] text-[#3F526E]">
            GET DATA
          </span>
        </button>
      
        <button
          onClick={() => setIsOpen(true)}
          style={{ backgroundColor: "#E9EDF1" }}
          className="ml-auto w-[197px] h-[36px] px-[10px] py-[7px] rounded-[6px] flex items-center gap-[8px] whitespace-nowrap overflow-hidden"
        >
          <PlusIcon
            style={{ color: "#3F526E" }}
            className="w-[22px] h-[22px]"
          />
          <span
            style={{ color: "#3F526E" }}
            className="font-['Noto_Sans'] text-[16px] w-[137px] h-[22px] font-[700] leading-[22px] text-left"
          >
            Add new students
          </span>
        </button>
      </div>
      <StudentDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    
      <div className="w-[1121px] h-[585px] mt-[10px] mx-[16px]">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="h-[32px] text-[12px] font-bold text-left ">
              <th className="px-2 py-1">Student Name</th>
              <th className="px-2 py-1">Cohort</th>
              <th className="px-2 py-1">Courses</th>
              <th className="px-2 py-1">Date Joined</th>
              <th className="px-2 py-1">Last Login</th>
              <th className="px-2 py-1">Status</th>
            </tr>
          </thead>
          <tbody>
      {Object.values(groupedStudents).length > 0 ? (
        Object.values(groupedStudents).map((student) => (
          <tr
            key={student.id}
            className="h-[32px] border-b border-[#edeff0]"
          >
            <td className="px-2 py-1">{student.name}</td>
            <td className="px-2 py-1">{student.cohort}</td>
            <td className="px-2 py-1 flex flex-wrap items-center gap-2">
              <div className="flex flex-wrap gap-2">
                {student.courses.map((course, index) => (
                  <div
                    style={{ backgroundColor: "#F6F8FA" }}
                    key={index}
                    className="flex items-center gap-2 px-2 py-1 rounded-lg min-w-[180px]"
                  >
                    <div className="relative">
                      <img
                        src={student.image}
                        alt={`Student enrolled in ${course}`}
                        className="w-[20px] h-[20px] rounded-md object-cover"
                      />
                    </div>
                    <Tooltip.TooltipProvider>
                    <Tooltip.Root delayDuration={0} >
                      <Tooltip.Trigger className="inline-block cursor-pointer">
                        <span className="text-sm truncate">{course}</span>
                      </Tooltip.Trigger>
                      <Tooltip.Content
                        side="top"
                        className=" bg-gray-200 text-black p-2 rounded shadow-md"
                      >
                        {`Course description for ${course}`}
                        <Tooltip.Arrow className="fill-black" />
                      </Tooltip.Content>
                    </Tooltip.Root>
                    </Tooltip.TooltipProvider>
                  </div>
                ))}
              </div>
            </td>

            <td className="px-2 py-1">
              {new Date(student.dateJoined).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </td>
            <td className="px-2 py-1">
              {new Date(student.lastLogin).toLocaleString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true, 
              })}
            </td>

            <td className="px-2 py-1 text-2xl">
              {student.status === "Active" ? (
                <span className="text-green-500">●</span>
              ) : (
                <span className="text-red-500">●</span>
              )}
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="6" className="text-center py-4">
            <div className="flex justify-center mt-28 items-center">
              <p className="text-2xl font-semibold text-gray-800 bg-gradient-to-r from-blue-400 to-red-600 text-transparent bg-clip-text animate-bounce">
                Select the year and corresponding class and Click on the GET DATA or Add New Student
              </p>
            </div>
          </td>
        </tr>
      )}
    </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contentarea;

/**
 * {
  "1": {
    id: "1",
    name: "John Doe",
    cohort: "2024",
    image: "student1.jpg",
    dateJoined: "2024-01-01",
    lastLogin: "2024-06-01",
    status: "Active",
    courses: ["Science", "Maths"]
  },
  "2": {
    id: "2",
    name: "Jane Smith",
    cohort: "2024",
    image: "student2.jpg",
    dateJoined: "2024-02-01",
    lastLogin: "2024-06-05",
    status: "Inactive",
    courses: ["Science"]
  }
}

 */
