import { HeaderComponent } from "../components/Header";
import { Link } from "react-router-dom";
import ProductCaluculateImage from "/public/product-calculator-preview.png";

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
        {/* Example Project */}
        {/* <div className="project-card bg-white bg-opacity-20 rounded-lg shadow-lg p-5">
          <a
            href="https://659abc93fd30079e5e90d69e--legendary-daifuku-b7f488.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="/public/ProductList.png"
              alt="Project Name"
              className="rounded-lg mb-4"
            />
            <h2 className="text-lg font-bold">Project Name</h2>
            <p className="text-md text-gray-300">
              Brief project description...
            </p>
          </a>
        </div> */}

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
        {/* Add more projects here */}
      </div>
      <div className="flex justify-center mt-10">
        <a
          href="/public/ChayanonResume.pdf"
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
