import React from 'react'
import Container from '../Component/Container'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GiElectric } from "react-icons/gi";
import { RiFingerprintFill } from "react-icons/ri";
import { GiProcessor } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast, Bounce } from 'react-toastify';


const About = () => {
  return (
    <div className="bg-gray-200 py-10">
      <Container>
        <div className='bg-gradient-to-r from-[#090c14] to-[#1f2937] text-white text-center py-16 rounded-xl'>
          <h2 className='text-4xl font-bold leading-10 mb-4'>About Us</h2>
          <h2 className='text-xl leading-7 '>Your trusted partner in technology since 2016</h2>
        </div>
        <div className='bg-white rounded-xl p-8 mt-8'>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 sm:p-4 rounded-md border-l-4 border-[#1c4289] mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-[#1c4289]">Introduction</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">E-commerce Website is a reputable and forward-thinking computer hardware, software, and service supplier company that was established in August 2016. Since our inception, we have consistently grown and evolved, expanding our portfolio to offer a comprehensive range of computing services, products, and solutions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">We deeply understand the pivotal role that computers play in today's world, serving as indispensable tools for both business and personal needs. As specialists in our field, we are dedicated to providing advanced and reliable computer systems, effective software solutions, and top-notch ongoing service. Our unwavering commitment to excellence in systems, service, and consulting is fundamental to achieving high performance and reliability, ensuring our clients' maximum productivity, profitability, and peace of mind.
          </p>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-4 rounded-md border-l-4 border-green-500 mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-green-700">Our Mission</h2>
          </div>
          <div className="bg-gray-50 rounded-md p-4 sm:p-6 border-l-3 border-[#1c4289] mb-10">
            <h2 className="text-sm sm:text-base text-gray-700 font-medium italic leading-relaxed">"E-commerce Website's mission is to provide cutting-edge computer systems and services to businesses and individuals. Our systems are state-of-the-art, highly efficient, and exceptionally reliable, while our service is marked by competence, dedication, and timeliness. Our ultimate objective is to become a complete support system for businesses and individuals, empowering our clients with enhanced productivity, increased competitiveness, and overall satisfaction."</h2>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 sm:p-4 rounded-md border-l-4 border-[#1c4289] mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-[#1c4289]">Our Objective</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">The core objective of E-commerce Website is to serve customers in both the public and private sectors. We aspire to offer our customers complete solutions, encompassing everything from initial study and design to hardware and software supply, expert guidance on product selection, service, and comprehensive training. Our unwavering commitment to the following key principles sets us apart:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-14">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 sm:p-6 rounded-md shadow-sm border-t-4 border-[#1c4289]">
              <div className="flex items-center mb-3">
                <IoIosCheckmarkCircleOutline className="h-6 w-6 sm:h-8 sm:w-8 text-[#1c4289] mr-2" />
                <h2 className="text-lg sm:text-xl font-semibold text-[#1f2937]">Quality</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-600">We are dedicated to delivering top-quality products and services.</p>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 sm:p-6 rounded-md shadow-sm border-t-4 border-[#1c4289]">
              <div className="flex items-center mb-3">
                <GiElectric className="h-6 w-6 sm:h-8 sm:w-8 text-[#1c4289] mr-2" />
                <h2 className="text-lg sm:text-xl font-semibold text-[#1f2937]">Service</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-600">Our commitment to service excellence is at the heart of our business.</p>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 sm:p-6 rounded-md shadow-sm border-t-4 border-[#1c4289]">
              <div className="flex items-center mb-3">
                <GiElectric className="h-6 w-6 sm:h-8 sm:w-8 text-[#1c4289] mr-2" />
                <h2 className="text-lg sm:text-xl font-semibold text-[#1f2937]">Efficiency</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-600">We ensure efficiency in all our operations to meet customer needs promptly.</p>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 sm:p-6 rounded-md shadow-sm border-t-4 border-[#1c4289]">
              <div className="flex items-center mb-3">
                <RiFingerprintFill className="h-6 w-6 sm:h-8 sm:w-8 text-[#1c4289] mr-2" />
                <h2 className="text-lg sm:text-xl font-semibold text-[#1f2937]">Innovation</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-600">We continuously explore innovative solutions to stay ahead in the industry.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-3 sm:p-4 rounded-md border-l-4 border-purple-500 mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-purple-700">Products & Services</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">E-commerce Website provides a diverse range of products and services to meet the evolving needs of our clients. Our product line includes:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4">
            <div className="bg-white p-3 sm:p-4 shadow-sm border border-gray-100 rounded-md hover:shadow-md transition-shadow duration-300 flex items-start">
              <GiProcessor className="h-5 w-5 sm:h-6 sm:w-6 text-[#1c4289] mr-2 sm:mr-3 mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base text-gray-700">Computer Systems: Desktops for Home & Office, Workstations & Servers</p>
            </div>
            <div className="bg-white p-3 sm:p-4 shadow-sm border border-gray-100 rounded-md hover:shadow-md transition-shadow duration-300 flex items-start">
              <GiProcessor className="h-5 w-5 sm:h-6 sm:w-6 text-[#1c4289] mr-2 sm:mr-3 mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base text-gray-700">Computer Systems: Desktops for Home & Office, Workstations & Servers</p>
            </div>
            <div className="bg-white p-3 sm:p-4 shadow-sm border border-gray-100 rounded-md hover:shadow-md transition-shadow duration-300 flex items-start">
              <GiProcessor className="h-5 w-5 sm:h-6 sm:w-6 text-[#1c4289] mr-2 sm:mr-3 mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base text-gray-700">Computer Systems: Desktops for Home & Office, Workstations & Servers</p>
            </div>
            <div className="bg-white p-3 sm:p-4 shadow-sm border border-gray-100 rounded-md hover:shadow-md transition-shadow duration-300 flex items-start">
              <GiProcessor className="h-5 w-5 sm:h-6 sm:w-6 text-[#1c4289] mr-2 sm:mr-3 mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base text-gray-700">Computer Systems: Desktops for Home & Office, Workstations & Servers</p>
            </div>
            <div className="bg-white p-3 sm:p-4 shadow-sm border border-gray-100 rounded-md hover:shadow-md transition-shadow duration-300 flex items-start">
              <GiProcessor className="h-5 w-5 sm:h-6 sm:w-6 text-[#1c4289] mr-2 sm:mr-3 mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base text-gray-700">Computer Systems: Desktops for Home & Office, Workstations & Servers</p>
            </div>
            <div className="bg-white p-3 sm:p-4 shadow-sm border border-gray-100 rounded-md hover:shadow-md transition-shadow duration-300 flex items-start">
              <GiProcessor className="h-5 w-5 sm:h-6 sm:w-6 text-[#1c4289] mr-2 sm:mr-3 mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base text-gray-700">Computer Systems: Desktops for Home & Office, Workstations & Servers</p>
            </div>
            <div className="bg-white p-3 sm:p-4 shadow-sm border border-gray-100 rounded-md hover:shadow-md transition-shadow duration-300 flex items-start">
              <GiProcessor className="h-5 w-5 sm:h-6 sm:w-6 text-[#1c4289] mr-2 sm:mr-3 mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base text-gray-700">Computer Systems: Desktops for Home & Office, Workstations & Servers</p>
            </div>
            <div className="bg-white p-3 sm:p-4 shadow-sm border border-gray-100 rounded-md hover:shadow-md transition-shadow duration-300 flex items-start">
              <GiProcessor className="h-5 w-5 sm:h-6 sm:w-6 text-[#1c4289] mr-2 sm:mr-3 mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base text-gray-700">Computer Systems: Desktops for Home & Office, Workstations & Servers</p>
            </div>
            <div className="bg-white p-3 sm:p-4 shadow-sm border border-gray-100 rounded-md hover:shadow-md transition-shadow duration-300 flex items-start">
              <GiProcessor className="h-5 w-5 sm:h-6 sm:w-6 text-[#1c4289] mr-2 sm:mr-3 mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base text-gray-700">Computer Systems: Desktops for Home & Office, Workstations & Servers</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-rose-50 p-3 sm:p-4 rounded-md border-l-4 border-red-500 mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-red-700">Our Commitment</h2>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-md shadow-md border border-gray-100">
            <p className="leading-relaxed mb-4 text-sm sm:text-base text-gray-700">E-commerce Website is dedicated to helping businesses and individuals harness the power of technology. With a focus on quality, service, efficiency, and innovation, we are your trusted partner in the world of computing.</p>
            <p className="leading-relaxed mb-4 text-sm sm:text-base text-gray-700">
              Our commitment to excellence ensures that we are well-positioned to meet your needs, whether you're in the
              public or private sector. Join us on this technology journey, and experience the
              difference that E-commerce Website can make in your world.
            </p>
            <div className="mt-6 text-center">
              <NavLink
                to="/"
                className="bg-[#1c4289] text-white px-4 sm:px-6 py-2 rounded-md hover:bg-[#143472] transition-colors duration-300 inline-flex items-center text-sm sm:text-base"
              >
                <CiLocationOn />
                Visit Our WebSite
              </NavLink>
            </div>
          </div>

        </div>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  )
}

export default About