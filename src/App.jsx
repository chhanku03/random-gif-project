 import Random from "./Components/Random";
 import Tag from "./Components/Tag";
export default function App() {
  return (
     <div className="background w-full h-full flex flex-col  items-center">
         <h1 className="bg-white rounded-lg   mt-5 w-11/12 text-center py-2 px-3 font-bold text-2xl">RANDOM GIFS</h1>
         <div className="flex flex-col w-full items-center h-11/12">
            <Random />
            <Tag />
         </div>
     </div>
  );
}
