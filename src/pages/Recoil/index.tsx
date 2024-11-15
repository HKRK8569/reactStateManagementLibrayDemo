import recoilLogo from "@/assets/recoil.svg";
import RecoilTodoList from "./components/RecoilTodoList";
import { RecoilRoot } from "recoil";

const Recoil = () => {
  return (
    <RecoilRoot>
      <div className="max-w-screen-md mx-auto">
        <header className="mt-20 flex flex-col items-center">
          <img src={recoilLogo} className="h-20" alt="react logo" />
        </header>
        <div className="mt-10">
          <RecoilTodoList />
        </div>
      </div>
    </RecoilRoot>
  );
};

export default Recoil;
