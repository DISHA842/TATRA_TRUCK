import { Routes, Route, Router } from "react-router-dom";
import Homepage from "./components/homepage";
import "./index.css";
import TeamsPage from "./components/Module";
import Literature from "./components/Literature";
import Trg from "./components/Trg";
import VideoTut from "./components/VideoTut";
import OH_Norm from "./components/OH_Norm";
import Arrival from "./components/Video_Chapters/Arrival"
import Stripping from "./components/Video_Chapters/Stripping";
import Washing from "./components/Video_Chapters/Washing";
import Chassis_Painting from "./components/Video_Chapters/Chassis_Painting";
import Engine_OH from "./components/Video_Chapters/Engine_OH";
import HubGearBox from "./components/Video_Chapters/HubGearBox";
import ElectWk from "./components/Video_Chapters/ElectWk";
import Wheel from "./components/Video_Chapters/Wheel";
import DoorDenting from "./components/Video_Chapters/DoorDenting";
import EngineFitment from "./components/Video_Chapters/EngineFitment"
import GearBoxFit from "./components/Video_Chapters/GearBoxFit";
import BodyRepair from "./components/Video_Chapters/BodyRepair";
import Painting from "./components/Video_Chapters/Painting";
import FinalFit from "./components/Video_Chapters/FinalFit";
import FinalCheck from "./components/Video_Chapters/FinalCheck";
import Upload from "./components/Upload";
import Uploadv from "./components/Videoup";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/Cards" element={<TeamsPage />} />
      <Route exact path="/Literature" element={<Literature />} />
      <Route exact path="/Trg" element={<Trg />} />
      <Route exact path="/VideoTut" element={<VideoTut />} />
      <Route exact path="/OH_Norm" element={<OH_Norm />} />
      <Route exact path="/Arrival" element={<Arrival />} />
      <Route exact path="/Stripping" element={<Stripping />} />
      <Route exact path="/Washing" element={<Washing />} />
      <Route exact path="/Chassis_Painting" element={<Chassis_Painting />} />
      <Route exact path="/Engine_OH" element={<Engine_OH />} />
      <Route exact path="/HubGearBox" element={<HubGearBox />} />
      <Route exact path="/ElectWk" element={<ElectWk />} />
      <Route exact path="/Wheel" element={<Wheel />} />
      <Route exact path="/DoorDenting" element={<DoorDenting />} />
      <Route exact path="/EngineFitment" element={<EngineFitment />} />
      <Route exact path="/GearBoxFit" element={<GearBoxFit />} />
      <Route exact path="/BodyRepair" element={<BodyRepair />} />
      <Route exact path="/Painting" element={<Painting />} />
      <Route exact path="/FinalFit" element={<FinalFit />} />
      <Route exact path="/FinalCheck" element={<FinalCheck />} />
      <Route exact path="/Upload" element={<Upload />} />
      <Route exact path="/Uploadv" element={<Uploadv />} />
    </Routes>
  );
}

export default App;
