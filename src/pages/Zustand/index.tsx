import zustandLogo from "@/assets/zustand.svg";
import ZustandTodoList from "./components/ZustandTodoList";

const Zustand = () => {
  return (
    <div>
      <div className="max-w-screen-md mx-auto">
        <header className="mt-20 flex flex-col items-center">
          <img src={zustandLogo} className="h-20" alt="react logo" />
        </header>
        <div className="mt-10">
          <ZustandTodoList />
        </div>
      </div>
    </div>
  );
};

export default Zustand;
