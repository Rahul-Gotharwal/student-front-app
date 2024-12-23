import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useDispatch } from "react-redux";
import { addStudentAsync } from "../../features/studentPostSlice";
import { ClipLoader } from "react-spinners";

const StudentDialog = ({ isOpen, onClose }) => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleCoursesChange = (e) => {
    const value = e.target.value;
    const coursesArray = value.split(",").map((course) => course.trim());
    setValue("courses", coursesArray);
  };

  const handleFormSubmit = async (data) => {
    setLoading(true);
    try {
      await dispatch(addStudentAsync(data)).unwrap();
      setSuccess(true);
      reset();
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to add student:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Transition show={isOpen}>
      <Dialog onClose={onClose} className="relative z-50">
        <TransitionChild
          as="div"
          className="fixed inset-0 bg-gray-500 opacity-30"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md rounded bg-white p-6">
            <DialogTitle className="text-lg font-bold mb-4">
              Add New Student
            </DialogTitle>
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="space-y-4"
            >
              <input
                {...register("name")}
                placeholder="Rahul Gotharwal"
                className="w-full border border-gray-300 rounded p-2"
              />

              <input
                {...register("email")}
                placeholder="rahulgotharwal877@gmail.com"
                className="w-full border border-gray-300 rounded p-2"
              />

              <input
                {...register("cohort")}
                placeholder="AY 2024-25"
                className="w-full border border-gray-300 rounded p-2"
              />

              <select
                {...register("status")}
                className="w-full border border-gray-300 rounded p-2"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>

              <input
                {...register("image")}
                placeholder="Image URL"
                className="w-full border border-gray-300 rounded p-2"
              />

              <input
                type="text"
                placeholder="CBSE 11 History, CBSE 11 Social"
                className="w-full border border-gray-300 rounded p-2"
                onChange={handleCoursesChange}
              />
              <small className="text-sm text-gray-500">
                Enter courses as comma-separated values (e.g., CBSE 11 History,
                CBSE 11 Social)
              </small>

              <input
                {...register("yearName")}
                placeholder="2024-25"
                className="w-full border border-gray-300 rounded p-2"
              />

              <input
                {...register("className")}
                placeholder="CBSE-9"
                className="w-full border border-gray-300 rounded p-2"
              />

              <button
                type="submit"
                className="w-full bg-gray-500 text-white p-2 rounded"
                disabled={loading}
              >
                {loading ? (
                  <ClipLoader color="#ffffff" loading={loading} size={24} />
                ) : (
                  "Save"
                )}
              </button>
            </form>

            {success && (
              <div className="mt-4 text-center text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="ml-2">Student Added Successfully</span>
              </div>
            )}

            <button
              onClick={onClose}
              className="mt-4 w-full text-center text-gray-500"
            >
              Cancel
            </button>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default StudentDialog;
