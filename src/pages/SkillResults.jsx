import { Button, Container, Stack, Typography, SvgIcon } from "@mui/material";
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';

import SkillResultsTable from "../components/SkillResultsTable";
import { ArrowLeft } from "@mui/icons-material";
import {useNavigate} from 'react-router-dom';


const SkillResults = ({passResults}) => {
    const navigate = useNavigate();
    return ( 
        <>
        <Container maxWidth="xl">
            <Button
                    sx={{mt: 2, mb: 2}}
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
            <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <Button
                    sx={{mt: 2, mb: 2}}
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Export
                  </Button>
                </Stack>
                <Stack
                    spacing={1}
                >
                    <SkillResultsTable passResults={passResults} />

                </Stack>
        </Container>
        </>
     );
}
 
export default SkillResults;