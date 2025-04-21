"use client";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div className="relative h-screen md:h-full overflow-hidden ">
      <img
        src="/img/doctors.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-[#0000003c] bg-opacity-75 h-full flex justify-center items-center">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 text-center text-purple-900 font-sans md:text-[60px] text-[30px] font-bold tracking-tight sm:text-4xl sm:leading-none">
                Book Your Appointment
                <br className="hidden md:block" />
                Now <span className="text-teal-accent-400"></span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-blue-900 md:text-[28px] text-center font-semibold md:leading-10">
                A Healtheir Tomorrow Starts Today, Schedule your Appointment{" "}
                <br /> Your Wellness, Our Expertise, Schedule Appointment Now!!!
              </p>
              <div className="flex gap-7">
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium py-2 px-4 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105" onClick={()=>{router.push('/book-appointments')}}>
                  Book Appointment
                </button>
                <button className="w-full bg-gradient-to-r from-gray-500 to-purple-700 text-white font-medium py-2 px-4 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"  onClick={()=>{router.push('/appointments')}} >
                  My Appointments
                </button>
              </div>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="rounded shadow-2xl sm:p-10 hidden md:block ">
                <img
                  src="/img/female.jpg"
                  className="inset-0 object-cover w-[500px] h-auto rounded-tl-[30%] rounded-br-[30%]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
