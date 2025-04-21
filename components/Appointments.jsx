"use client";

const doctors = [
  {
    id: 1,
    name: "Dr. Emily Stone",
    photo: "/img/doctor.png",
    available: false,
    rating: 4,
    location: "New York, NY",
    specialty: "Cardiology",
    time: "12.00pm",
    date: "April 30 2025",
  },
  {
    id: 2,
    name: "Dr. James Lee",
    photo: "/img/dark.png",
    available: true,
    rating: 5,
    location: "Los Angeles, CA",
    specialty: "Dermatology",
    time: "10.00am",
    date: "July 2nd 2025",
  },
  {
    id: 3,
    name: "Dr. Olivia Chen",
    photo: "/img/lily.png",
    available: true,
    rating: 3,
    location: "Chicago, IL",
    specialty: "Pediatrics",
    time: "7.00am",
    date: "Sept 30 2025",
  },
  
];

const BookedAppointments = () => {
 

  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: "url(/img/bg1.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="p-4 max-w-6xl mx-auto space-y-6 ">
        <h2 className=" mb-6 text-center text-purple-900 font-sans md:text-[40px] text-[30px] font-bold tracking-tight sm:text-4xl sm:leading-none">
          Upcoming Appointments
          <br className="hidden md:block" />
          <span className="text-teal-accent-400"></span>
        </h2>
        {/* Filter Dropdown */}

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-[#0000003e] shadow-xl rounded-2xl">
          {doctors.map((doctor) => (
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
                <div className="flex items-center gap-1 text-yellow-500"></div>
                <p className="text-sm text-gray-900">{doctor.date}</p>
                <p className="text-sm text-purple-600">{doctor.time}</p>

                <p
                  className={`text-sm ${
                    doctor.available ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {doctor.available ? "Confirmed" : "Pending"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
      </div>
    </div>
  );
};

export default BookedAppointments;
