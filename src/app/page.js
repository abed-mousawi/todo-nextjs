import HeaderAddItem from "./components/HeaderAddItem";
import TodoBox from "./components/TodoBox";

export default function Home() {
  return (
    <main className="w-8/12 mx-auto mt-5 ">
      <HeaderAddItem />
      <div className=" border-dashed border-2 p-6 rounded-xl mt-5">
        <TodoBox />
      </div>
    </main>
  );
}
