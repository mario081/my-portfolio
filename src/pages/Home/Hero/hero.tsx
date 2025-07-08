import { StyledImg, StyledHero } from "./herocss"
import Avatar from "../../../assets/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button, Container, Grid, Typography } from "@mui/material"

const Hero = () => {

    return (
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <StyledImg src={Avatar} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Typography color="secondary" variant="h1" textAlign={"center"}>José Mário</Typography>
                        <Typography color="secondary" variant="h2" textAlign={"center"}>I'm Software Developer</Typography>
                        <Grid container display={"flex"} justifyContent={"center"}>
                            <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                                <Button>
                                    <DownloadIcon />
                                    Download CV
                                </Button>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                                <Button>
                                    <MailOutlineIcon />
                                    Contact me
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Container>
        </StyledHero>
    )
}

export default Hero