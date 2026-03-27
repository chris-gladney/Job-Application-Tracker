import "./App.css";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobForm from "./Components/JobForm";
import JobsBoard from "./Components/JobsBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />

        {/* Routes below this point will be protected */}
        <Route path="/add-job" element={<JobForm />} />
        <Route path="/jobs-board" element={<JobsBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
