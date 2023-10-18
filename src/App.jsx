import { useContext, useEffect, useState } from "react";

import Card from "./components/Card";
import InputBar from "./components/Input";
import HoursCards from "./components/HoursCards";
import Today from "./components/Today";
import OtherDays from "./components/OtherDays";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "./store/actions/reducer";
import { getwather } from "./store/actions/reducer";
function App() {
  const { countryName, showWeather, weather, isLoading } = useSelector(
    (state) => state.test
  );
  const disptach = useDispatch();

  return (
    <main className=" flex flex-col bg-gray-200 items-center justify-center h-screen w-screen">
      <InputBar />
      {showWeather && (
        <div className=" bg-gray-50 rounded-3xl flex max-w-[80%] h-[500px] mt-4">
          <div className="flex flex-col justify-center items-center">
            <div className=" p-10 h-fit ">
              <Today />
            </div>
            <div className="p-10 ">
              <HoursCards />
            </div>
          </div>

          <div className=" font-poppins p-6 bg-gray-400/40 rounded-3xl">
            <OtherDays />
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
