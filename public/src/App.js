import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/register" element={<Register />} /> />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
