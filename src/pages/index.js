
import HomePage from "./components/home";
import Navbar from "./components/navbar";

export default function Home() {
  let date = new Date;
  let times = date.toDateString();
  return (
    <div className="flex items-center justify-center ">
    <div className=" text-center flex flex-col items-center flex-wrap md:w-4/5 justify-center w-full">
      <div className="before flex flex-col flex-wrap items-center bg-transparent h-screen  w-full ">
        <div className="mb-10 p-3  border-b-2 border-black w-full">
          <Navbar />
        </div>

        <div className="h-40 my-10 ">
          <p className="text-2xl "> Welcome to ToDo-app</p>
           Manage your all tasks and keep going 
           <p> Today is {times}</p>
        </div>
      </div>
      <div className='bg-slate-200 text-black  w-full '>
        <HomePage />
      </div>
    </div>
    </div>
  );
}
