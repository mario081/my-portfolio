import { StyledImg, StyledHero } from "./herocss"
import Avatar from "../../../assets/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Container, Grid, Typography } from "@mui/material"
import StyledButton from "../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../components/AnimateBackground/AnimateBackground";
import Box from '@mui/material/Box';

const Hero = () => {

    return (
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImg src={Avatar} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography color="primary.contrastText" variant="h1" textAlign={"center"}>José Mário</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign={"center"}>I'm Software Developer</Typography>
                        <Grid container display={"flex"} justifyContent={"center"} spacing={4}>
                            <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                                <StyledButton>
                                    <DownloadIcon />
                                    <Typography>
                                        Downloand CV
                                    </Typography>
                                </StyledButton>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                                <StyledButton>
                                    <MailOutlineIcon />
                                    <Typography>
                                        Contact me
                                    </Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Container>
        </StyledHero>
    )
}

export default Hero