🩺 Doctor Booking Platform
A responsive doctor directory and appointment booking interface built with Next.js and Tailwind CSS. Users can view a list of doctors, filter by specialty, check availability, and book appointments with date and time selection.

🚀 Features
🔍 Filter doctors by specialty

🧑‍⚕️ Responsive doctor card layout with image, ratings, and availability

📆 Modal with date/time selection to book appointments

📝 View your booked appointments in a dedicated section

📱 Fully responsive for mobile and desktop

📁 Project Structure
cpp
Copy
Edit
/components
  ├── DoctorList.jsx           // Lists all doctors with booking modal
  ├── BookedAppointments.jsx   // Shows all booked appointments

/public/images
  ├── doc1.jpg                 // Doctor photos (sample assets)
  ├── doc2.jpg
  ├── doc3.jpg

/pages
  ├── index.js                 // Main homepage with doctor list
  ├── appointments.js         // Page for viewing booked appointments
🛠️ Tech Stack
Next.js – App framework for React

Tailwind CSS – Utility-first CSS for rapid styling

Lucide Icons – Beautiful, customizable icons

📦 Getting Started
1. Clone the repo
bash
Copy

cd doctor-ui
2. Install dependencies
bash
Copy
Edit
npm install
# or
yarn
3. Run the development server
bash
Copy
Edit
npm run dev
# or
yarn dev
Visit http://localhost:3000 to view the app.

📷 Sample Doctors
Doctor images are located in /public/images/ and referenced in DoctorList.jsx. You can replace them with real ones or fetch from an API.

Minimum AI assistance was needed, I only used Claude AI in looking for the perfect 