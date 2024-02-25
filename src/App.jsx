import { HeaderComponent } from "./components/Header";
import { HeroComponent } from "./components/Hero";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-tr from-[#60072c] via-[#120b2e] to-[#091498] px-8 md:px-14 lg:px-36 pb-10 pt-7  overflow-y-auto">
        <HeaderComponent />

        <HeroComponent />
      </div>
    </>
  );
}

export default App;
