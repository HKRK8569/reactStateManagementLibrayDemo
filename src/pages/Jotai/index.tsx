import jotaiLogo from "@/assets/jotai.svg";
import JotaiTodoList from "./components/JotaiTodoList";

const Jotai = () => {
  return (
    <div>
      <div className="max-w-screen-md mx-auto">
        <header className="mt-20 flex flex-col items-center">
          <img src={jotaiLogo} className="h-20" alt="react logo" />
        </header>
        <div className="mt-10">
          <JotaiTodoList />
        </div>
      </div>
    </div>
  );
};

export default Jotai;
