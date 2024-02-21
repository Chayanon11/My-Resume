import { HeaderComponent } from "../components/Header";
import { Link } from "react-router-dom";

export function PortfolioComponent() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-tr from-[#60072c] via-[#120b2e] to-[#091498] px-8 md:px-14 lg:px-36 pb-10 pt-7 ">
        <HeaderComponent />
        <div className="grid grid-cols-1 md:grid-cols-2 p-10 items-center border-black-1px"></div>
        <div className="hero-content flex-col justify-center bg-gradient-to-tr from-[#60072c] via-[#120b2e] to-[#091498] bg-blur-sm bg-opacity-50 p-8 md:p-14 lg:p-36 pb-10 pt-7">
          <h1>Portfolio</h1>

          <a href="https://659abc93fd30079e5e90d69e--legendary-daifuku-b7f488.netlify.app/">
            <img src="/public/ProductList.png" alt="ProductList" />
          </a>
          <div className="flex flex-row gap-4">
            <a
              href="/public/ChayanonResume.pdf"
              download="ChayanonResume.pdf"
              className="btn btn-primary mt-4 ">
              Download Resume
            </a>
            <Link to="/" className="btn btn-primary mt-4">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
