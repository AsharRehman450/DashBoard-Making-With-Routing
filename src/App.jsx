import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Dashboard from "./Components/Dashboard";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif", 
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
