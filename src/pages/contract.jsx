import { HeaderComponent } from "../components/Header";
import { Link } from "react-router-dom";

export function ContactComponent() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-tr from-[#60072c] via-[#120b2e] to-[#091498] px-8 md:px-14 lg:px-36 pb-10 pt-7">
        <HeaderComponent />
        <div className="grid grid-cols-1 md:grid-cols-2 p-10 items-center border-black-1px"></div>
        <div className="hero-content flex-col justify-center p-5 bg-gradient-to-tr from-[#60072c] via-[#120b2e] to-[#091498] bg-blur-sm bg-opacity-50 p-8 md:p-14 lg:p-36 pb-10 pt-7">
          <h1>Contact</h1>
        </div>
        <div className="flex justify-center">
          <Link to="/" className="btn btn-primary mt-4">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
