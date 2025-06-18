import "./App.css";
import Header from "./components/header/Header";
import Task from "./components/task/Task";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={10}>
              <Header />
            </Grid>

            <Grid size={4}></Grid>
            <Grid size={4}>
              <Task />
            </Grid>
            <Grid size={4}></Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default App;
