"use client";

import { useState } from "react";
import { Star, X } from "lucide-react";
import { doctors } from "./Data/DoctorsData";
import {useRouter} from "next/navigation"
import { toast } from 'react-toastify';

const DoctorList = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [modalDoctor, setModalDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const router = useRouter()

  const specialties = ["All", ...new Set(doctors.map((doc) => doc.specialty))];

  const filteredDoctors =
    selectedSpecialty === "All"
      ? doctors
      : doctors.filter((doc) => doc.specialty === selectedSpecialty);

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime)
      return toast.error("Please select date and time");
    toast.success('Your appointment have been scheduled');
    router.push('/appointments')
    setModalDoctor(null);
    setSelectedDate("");
    setSelectedTime("");
  };

  return (
    <div
      className="h-fit"
      style={{
        backgroundImage: "url(/img/bg.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="p-4 max-w-6xl mx-auto space-y-6 ">
        <h2 className=" mb-6 text-center text-purple-900 font-sans md:text-[40px] text-[30px] font-bold tracking-tight sm:text-4xl sm:leading-none">
          Book Your Appointment
          <br className="hidden md:block" />
          Now <span className="text-teal-accent-400"></span>
        </h2>
        {/* Filter Dropdown */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <label className="font-medium">Filter by Specialty:</label>
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="border rounded-xl px-3 py-2 text-sm"
            >
              {specialties.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>
          <button className="w-fit bg-gradient-to-r from-gray-500 to-purple-700 text-white font-medium py-2 px-4 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105" onClick={()=>{router.push('/appointments')}}>
            My Appointments
          </button>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-[#0000003e] shadow-xl rounded-2xl">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl shadow-md p-4 inset-shadow-sm w-full"
            >
              <img
                src={doctor.photo}
                alt={doctor.name}
                className="w-full h-40 object-contain rounded-xl"
              />
              <div className="mt-3 space-y-1">
                <h3 className="text-lg font-semibold">{doctor.name}</h3>
                <p className="text-sm text-gray-500">{doctor.specialty}</p>
                <p className="text-sm text-gray-400">{doctor.location}</p>
                <div className="flex items-center gap-1 text-yellow-500">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < doctor.rating ? "#facc15" : "none"}
                      stroke="#facc15"
                    />
                  ))}
                </div>
                <p
                  className={`text-sm ${
                    doctor.available ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {doctor.available ? "Available" : "Not Available"}
                </p>
                <button
                  className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl text-sm"
                  onClick={() => setModalDoctor(doctor)}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalDoctor && (
          <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-2xl p-6 relative">
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                onClick={() => setModalDoctor(null)}
              >
                <X size={20} />
              </button>

              {/* Doctor Info */}
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={modalDoctor.photo}
                  alt={modalDoctor.name}
                  className="w-full md:w-48 h-48 object-cover rounded-xl"
                />
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">{modalDoctor.name}</h2>
                  <p className="text-gray-500">{modalDoctor.specialty}</p>
                  <p className="text-gray-400">{modalDoctor.location}</p>
                  <p
                    className={`text-sm ${
                      modalDoctor.available ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {modalDoctor.available ? "Available" : "Not Available"}
                  </p>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill={i < modalDoctor.rating ? "#facc15" : "none"}
                        stroke="#facc15"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <div className="mt-6 space-y-3">
                <div>
                  <label className="block text-sm font-medium">
                    Select Date:
                  </label>
                  <input
                    type="date"
                    className="w-full border rounded-lg px-3 py-2 mt-1"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Select Time:
                  </label>
                  <input
                    type="time"
                    className="w-full border rounded-lg px-3 py-2 mt-1"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  />
                </div>
                <button
                  onClick={handleConfirm}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl mt-2"
                >
                  Confirm Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorList;
