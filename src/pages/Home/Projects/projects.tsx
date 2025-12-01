import { Container, Grid, Typography, Box, Card, CardContent, CardActions, Chip } from "@mui/material";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import CodeIcon from '@mui/icons-material/Code';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState, useEffect } from "react";
import { AnimatedBackground } from "../../../components/AnimateBackground/AnimateBackground";

const StyledSection = styled("section")(({ theme }) => ({
    backgroundColor: theme?.palette.primary.main,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    padding: "40px 0 100px 0",
    scrollMarginTop: "0px",
    position: "relative",
    overflow: "hidden",
}));

const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: `${theme.palette.primary.contrastText}10`,
    border: `1px solid ${theme.palette.primary.contrastText}20`,
    borderRadius: "8px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    '&:hover': {
        transform: "translateY(-5px)",
        boxShadow: `0 10px 30px ${theme.palette.primary.contrastText}20`,
    }
}));

interface GitHubRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    topics: string[];
}

const Projects = () => {
    const theme = useTheme();
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);

    const GITHUB_USERNAME = "mario081"; 

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
                if (response.ok) {
                    const data = await response.json();
                    setRepos(data);
                } else {
                    console.error("Erro ao buscar repositórios");
                }
            } catch (error) {
                console.error("Erro ao buscar repositórios:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    return (
        <StyledSection id="projects">
            <Box
                position="absolute"
                width="100%"
                height="100%"
                top={0}
                left={0}
                sx={{ overflow: "hidden", zIndex: 0, opacity: 0.3 }}
            >
                <Box position="absolute" width="100%" top="30%" right="-15%">
                    <AnimatedBackground />
                </Box>
            </Box>
            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                <Typography
                    variant="h2"
                    color="primary.contrastText"
                    gutterBottom
                    sx={{ fontWeight: 600, mb: 6, textAlign: "center" }}
                >
                    Meus Projetos
                </Typography>
                
                {loading ? (
                    <Typography color="primary.contrastText" align="center">
                        Carregando projetos...
                    </Typography>
                ) : repos.length === 0 ? (
                    <Box sx={{ textAlign: "center", py: 8 }}>
                        <CodeIcon sx={{ fontSize: 64, color: theme.palette.primary.contrastText, mb: 2, opacity: 0.5 }} />
                        <Typography variant="h5" color="primary.contrastText" paragraph>
                            Nenhum projeto encontrado
                        </Typography>
                        <Typography variant="body1" color="primary.contrastText" sx={{ opacity: 0.7 }}>
                            Configure o seu nome de usuário do GitHub no componente Projects
                        </Typography>
                    </Box>
                ) : (
                    <Grid container spacing={4}>
                        {repos.map((repo) => (
                            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={repo.id}>
                                <StyledCard>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1 }}>
                                            <CodeIcon sx={{ color: theme.palette.secondary.main }} />
                                            <Typography
                                                variant="h5"
                                                component="h3"
                                                color="primary.contrastText"
                                                sx={{ fontWeight: 600 }}
                                            >
                                                {repo.name}
                                            </Typography>
                                        </Box>
                                        <Typography
                                            variant="body2"
                                            color="primary.contrastText"
                                            paragraph
                                            sx={{ opacity: 0.8, minHeight: "60px" }}
                                        >
                                            {repo.description || "Sem descrição disponível"}
                                        </Typography>
                                        {repo.language && (
                                            <Chip
                                                label={repo.language}
                                                size="small"
                                                sx={{
                                                    backgroundColor: `${theme.palette.secondary.main}30`,
                                                    color: theme.palette.secondary.main,
                                                    mb: 2,
                                                }}
                                            />
                                        )}
                                        <Box sx={{ display: "flex", gap: 2, mt: 2, opacity: 0.7 }}>
                                            <Typography variant="caption" color="primary.contrastText">
                                                ⭐ {repo.stargazers_count}
                                            </Typography>
                                            <Typography variant="caption" color="primary.contrastText">
                                                🍴 {repo.forks_count}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                    <CardActions sx={{ justifyContent: "flex-end", pb: 2, px: 2 }}>
                                        <Box
                                            component="a"
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 1,
                                                color: theme.palette.primary.contrastText,
                                                textDecoration: "none",
                                                padding: "8px 16px",
                                                borderRadius: "8px",
                                                border: `1px solid ${theme.palette.primary.contrastText}30`,
                                                transition: "all 0.3s ease",
                                                '&:hover': {
                                                    backgroundColor: `${theme.palette.primary.contrastText}15`,
                                                    borderColor: theme.palette.secondary.main,
                                                }
                                            }}
                                        >
                                            <GitHubIcon fontSize="small" />
                                            <Typography variant="body2">Ver no GitHub</Typography>
                                            <OpenInNewIcon fontSize="small" />
                                        </Box>
                                    </CardActions>
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </StyledSection>
    );
};

export default Projects;

