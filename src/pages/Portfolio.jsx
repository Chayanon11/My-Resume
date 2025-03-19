import { HeaderComponent } from "../components/Header";
import { Link } from "react-router-dom";
import ProductCaluculateImage from "../assets/product-calculator-preview.png";
import Resume from "../assets/CHAYANON_BHARASARN_CV.pdf";
import NeatlyHotelImage from "../assets/neatly-hotel-preview.png";
import todoListImage from "../assets/todoList.png";
import GoogleSearchImage from "../assets/GoogleSearch.png";
import TaxiImage from "../assets/taxi.png";
import xImage from "../assets/x-clone.png";
import PosImage from "../assets/POS-Cashier.png"

export function PortfolioComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#60072c] via-[#120b2e] to-[#091498] px-8 md:px-14 lg:px-36 pb-10 pt-7">
      <HeaderComponent />
      <div className="text-center pt-10 pb-5">
        <h1 className="text-4xl font-bold text-white">Portfolio</h1>
        <p className="text-xl text-gray-300 mt-2">
          A showcase of my latest work
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
        <div className="project-card bg-white bg-opacity-20 rounded-lg shadow-lg p-5">
          <a
            href="https://taxi-booking-nextjs-nu.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={TaxiImage}
              alt="Product Price Calculate"
              className="rounded-lg mb-4"
            />
            <h2 className="text-lg font-bold">Taxi-booking-nextjs</h2>
            <p className="text-md text-gray-300">
              This project using React NextJs 14 Taxi Booking App : NextJs 14,
              Tailwind Css, Typescript, Mapbox
            </p>
          </a>
        </div>
        {/* Add more projects here */}

        <div className="project-card bg-white bg-opacity-20 rounded-lg shadow-lg p-5">
          <a
            href="https://cozy-naiad-830c4d.netlify.app"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={PosImage}
              alt="Product Price Calculate"
              className="rounded-lg mb-4"
            />
            <h2 className="text-lg font-bold">POS APP</h2>
            <p className="text-md text-gray-300">
              POS Cashier for Browser And Desktop App : This project using
              NextJs 14, Tailwind Css, Typescript , Electron that can be used on
              both browser and desktop. The user can login and use the POS
              system to manage their products and sales.
              <br />
              Login: 1111
            </p>
          </a>
        </div>

        <div className="project-card bg-white bg-opacity-20 rounded-lg shadow-lg p-5">
          <a
            href="https://grand-final-project-neatly-hotel-teal.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={NeatlyHotelImage}
              alt="Product Price Calculate"
              className="rounded-lg mb-4"
            />
            <h2 className="text-lg font-bold">Neatly Hotel</h2>
            <p className="text-md text-gray-300">
              The project is a hotel booking website that allows users to book a
              room and view the hotel's information. The project is built with
              Next.js, Tailwind CSS, Prisma and Supabase.
              <br />
              username : admin123
              password : 123456
            </p>
          </a>
        </div>

        <div className="project-card bg-white bg-opacity-20 rounded-lg shadow-lg p-5">
          <a
            href="https://todo-list-zeta-blue.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={todoListImage}
              alt="Todo List"
              className="rounded-lg mb-4"
            />
            <h2 className="text-lg font-bold">Todo List</h2>
            <p className="text-md text-gray-300">
              This project is a Todo list website built using Next.js, Tailwind
              CSS, Prisma, and MongoDB. It enables users to create, update, and
              delete their tasks efficiently.
            </p>
          </a>
        </div>

        <div className="project-card bg-white bg-opacity-20 rounded-lg shadow-lg p-5">
          <a
            href="https://x-next-two.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={xImage}
              alt="Product Price Calculate"
              className="rounded-lg mb-4"
            />
            <h2 className="text-lg font-bold">X-clone-Next.JS </h2>
            <p className="text-md text-gray-300">
              This project demonstrates full-stack capabilities, including
              authentication, image handling, and real-time interactions ,
              modern web application.
            </p>
          </a>
        </div>

        <div className="project-card bg-white bg-opacity-20 rounded-lg shadow-lg p-5">
          <a
            href="https://google-next-pied-mu.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={GoogleSearchImage}
              alt="Product Price Calculate"
              className="rounded-lg mb-4"
            />
            <h2 className="text-lg font-bold">Google-clone </h2>
            <p className="text-md text-gray-300">
              The project is a Google Search for website and images that allows
              users to search for website and image by google Google API. The
              project is built with Next.js, Tailwind CSS.
            </p>
          </a>
        </div>

        <div className="project-card bg-white bg-opacity-20 rounded-lg shadow-lg p-5">
          <a
            href="https://product-price-calculator-chi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={ProductCaluculateImage}
              alt="Product Price Calculate"
              className="rounded-lg mb-4"
            />
            <h2 className="text-lg font-bold">Product Price Calculate</h2>
            <p className="text-md text-gray-300">
              This project using HTML,CSS,JavaScript to calculate the price of
              the product.
            </p>
          </a>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <a
          href={Resume}
          download="ChayanonResume.pdf"
          className="btn btn-primary">
          Download Resume
        </a>

        <Link to="/" className="btn btn-primary ml-4">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
