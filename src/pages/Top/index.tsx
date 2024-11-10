import reactLogo from "@/assets/react.svg";
import LogoPageLinks from "./components/LogoPageLinks";

const Top = () => {
  return (
    <div>
      <div className="max-w-screen-md mx-auto">
        <header className="mt-20 flex flex-col items-center">
          <img src={reactLogo} className="h-20" alt="react logo" />
          <h1 className="text-3xl">react state management TODOs</h1>
        </header>
        <LogoPageLinks />
      </div>
    </div>
  );
};

export default Top;
