import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Header from "./Pages/Header";
import Menu from "./Pages/Menu";
import Footer from "./Pages/Footer";
import Content from "./Pages/Content";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <Header />
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            <Item>
              <Menu />
            </Item>
          </Grid>
          <Grid item xs={12} md={8}>
            <Item>
              <Content />
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <Footer />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
