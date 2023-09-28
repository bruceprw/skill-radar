import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { SkillSearchSection } from "../components/SkillSearchSection";
import SkillGrid from "../components/skillGrid.jsx";

const Page = ({ setPassResults }) => {
  return (
    <Box sx={{ maxWidth: "100%" }}>
        <h2 style={{ display: "flex" }}>Skill Search</h2>
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <SkillSearchSection setPassResults={setPassResults} />
            <Box
        sx={{
          marginBottom: "1em",
          width: "auto",
          display: "flex",
          alignItems: "center",
          background: "#f0f4f8",
          borderRadius: "10px",
          padding: "1em",
        }}
      >
        <div style={{ display: "flex", alignContent: "center" }}>
          <div
            style={{ display: "flex", fontSize: "2rem", marginRight: "0.25em" }}
          >
            🔥
          </div>
          <div style={{ display: "inline", alignSelf: "center" }}>
            These are the trending skills right now.
          </div>
        </div>
      </Box>
            <SkillGrid />
          </Stack>
        </Container>
      </Box>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
