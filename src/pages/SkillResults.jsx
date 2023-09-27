import { Button, Container, Stack, Typography, SvgIcon } from "@mui/material";
import SkillResultsTable from "../components/SkillResultsTable";
import { ArrowLeft } from "@mui/icons-material";
import {useNavigate} from 'react-router-dom';


const SkillResults = ({passResults}) => {
    const navigate = useNavigate();
    return ( 
        <>
        <Container maxWidth="xl">
        <Button
                    onClick={() => navigate('/skill-search') }
                    variant="contained"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowLeft />
                      </SvgIcon>
                    )}
                  >
                    Back
                  </Button>
            <Stack spacing={3}>
                <Stack spacing={1}>
                    <Typography variant="h4">
                        Skill Search Results
                    </Typography>
                </Stack>
            </Stack>
            <SkillResultsTable passResults={passResults} />
        </Container>
        </>
     );
}
 
export default SkillResults;