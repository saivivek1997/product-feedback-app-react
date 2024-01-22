import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SuggestionPage from "./pages/SuggestionPage";
import GlobalStyles from "./globalStyles";
import SuggestionDetailsPage from "./pages/SuggestionDetailsPage";
import AddForm from "./features/form/AddForm";
import EditForm from "./features/form/EditForm";
import RoadMapPage from "./pages/RoadMapPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SuggestionPage />} />
        <Route path="/suggestion/:id" element={<SuggestionDetailsPage />} />
        <Route path="/addform" element={<AddForm />} />
        <Route path="/editform/:id" element={<EditForm />} />
        <Route path="/roadmap" element={<RoadMapPage />} />
      </Routes>
    </>
  );
}
export default App;
