import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import About from "./pages/About";
import Home from "./pages/Home";
import StudentDetails from "./pages/StudentDetails";
import AllStudents from "./pages/AllStudents";
import AccountUpdate from "./pages/AccountUpdate";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ProfilePicUpload from "./pages/ProfilePicUpload";
import ResetPassowrd from "./pages/ResetPassowrd";
import ForgotPassword from "./pages/ForgotPassword";
import TaskDetails from "./pages/TaskDetails";
import PageNotFound_404 from "./pages/PageNotFound_404";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
      textTransform: "none",
      fontSize: 16,
    },
  },
});

const baseUrl = "http://localhost:5000";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar baseUrl={baseUrl} />
          <Routes>
            <Route path="/dashboard" element={<Dashboard baseUrl={baseUrl} />} />
            <Route path="/login" element={<Signin baseUrl={baseUrl} />} />
            <Route path="/signup" element={<Signup baseUrl={baseUrl} />} />
            <Route path="/about" element={<About baseUrl={baseUrl} />} />
            <Route path="/" element={<Home baseUrl={baseUrl} />} />
            <Route path="/update" element={<AccountUpdate baseUrl={baseUrl} />} />
            <Route path="/allstudents" element={<AllStudents baseUrl={baseUrl} />} />
            <Route path="/student/:id" element={<StudentDetails baseUrl={baseUrl} />} />
            <Route path="/forgotpassword" element={<ForgotPassword baseUrl={baseUrl} />} />
            <Route path="/taskdetails/:taskID" element={<TaskDetails baseUrl={baseUrl} />} />
            <Route path="/profilepicupload/:id" element={<ProfilePicUpload baseUrl={baseUrl} />} />
            <Route path="/student/resetpassword/:student_id/:token" element={<ResetPassowrd baseUrl={baseUrl} />} />
            <Route path="*" element={<PageNotFound_404 baseUrl={baseUrl} />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
