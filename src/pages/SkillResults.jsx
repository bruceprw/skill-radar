import { Container, Stack, Typography } from "@mui/material";
import SkillResultsTable from "../components/SkillResultsTable";

const SkillResults = () => {
    return ( 
        <>
        <Container maxWidth="xl">
            <Stack spacing={3}>
                <Stack spacing={1}>
                    <Typography variant="h4">
                        Skill Search Results
                    </Typography>
                </Stack>
            </Stack>
            <SkillResultsTable />
        </Container>
        </>
     );
}
 
export default SkillResults;