import { Container, Grid, Typography, Box, Paper } from "@mui/material";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import { AnimatedBackground } from "../../../components/AnimateBackground/AnimateBackground";
import CodeIcon from '@mui/icons-material/Code';
import ApiIcon from '@mui/icons-material/Api';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import StyleIcon from '@mui/icons-material/Style';
import BoltIcon from '@mui/icons-material/Bolt';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import type { ReactNode } from "react";

// Ícone customizado para Docker
const DockerIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.984 2.196v3.2h-2.4V2.196h2.4zm2.4 0h2.4v3.2h-2.4V2.196zm3.6 2.4h-2.4v2.4h2.4V4.596zm0 3.2h-2.4v2.4h2.4V7.796zm0 3.188h-2.4v2.4h2.4v-2.4zm-3.6 3.2h-2.4v2.4h2.4v-2.4zm-3.594 0h-2.4v2.4h2.4v-2.4zm-3.606 0H4.784v2.4h2.4v-2.4zm-3.6-3.188h2.4V7.796H4.584v2.4zm0-3.2h2.4V4.596H4.584v2.4zm15.6 3.2v2.4h2.4v-2.4h-2.4z"/>
    </svg>
);

// Ícone customizado para React
const ReactIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)"/>
    </svg>
);

// Ícone customizado para Git
const GitIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.912l2.658 2.66c.645-.22 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
    </svg>
);

// Ícone customizado para Node.js
const NodeJsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 8h4v2h-2v8h-2V8zm8-2c2 0 4 1 4 3v6c0 2-2 3-4 3s-4-1-4-3V9c0-2 2-3 4-3z" fill="currentColor"/>
    </svg>
);

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

const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: `${theme.palette.primary.contrastText}10`,
    padding: "30px",
    borderRadius: "8px",
    border: `1px solid ${theme.palette.primary.contrastText}20`,
    height: "100%",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    '&:hover': {
        transform: "translateY(-5px)",
        boxShadow: `0 10px 30px ${theme.palette.primary.contrastText}20`,
    }
}));

const SkillChip = styled(Box)(({ theme }) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 16px",
    borderRadius: "8px",
    backgroundColor: `${theme.palette.primary.contrastText}15`,
    border: `1px solid ${theme.palette.primary.contrastText}30`,
    margin: "8px",
    fontSize: "0.9rem",
    color: theme.palette.primary.contrastText,
    transition: "all 0.3s ease",
    '&:hover': {
        backgroundColor: `${theme.palette.primary.contrastText}25`,
        transform: "translateY(-2px)",
    }
}));

interface Skill {
    name: string;
    icon: ReactNode;
}

const Skills = () => {
    const theme = useTheme();
    
    const skills: Skill[] = [
        { name: "JavaScript", icon: <CodeIcon sx={{ fontSize: 20, color: theme.palette.secondary.main }} /> },
        { name: "TypeScript", icon: <IntegrationInstructionsIcon sx={{ fontSize: 20, color: theme.palette.secondary.main }} /> },
        { name: "React", icon: <ReactIcon /> },
        { name: "Node.js", icon: <NodeJsIcon /> },
        { name: "HTML5", icon: <HtmlIcon sx={{ fontSize: 20, color: theme.palette.secondary.main }} /> },
        { name: "CSS3", icon: <CssIcon sx={{ fontSize: 20, color: theme.palette.secondary.main }} /> },
        { name: "Git", icon: <GitIcon /> },
        { name: "Material-UI", icon: <ViewModuleIcon sx={{ fontSize: 20, color: theme.palette.secondary.main }} /> },
        { name: "Styled Components", icon: <StyleIcon sx={{ fontSize: 20, color: theme.palette.secondary.main }} /> },
        { name: "Vite", icon: <BoltIcon sx={{ fontSize: 20, color: theme.palette.secondary.main }} /> },
        { name: "RESTful API", icon: <ApiIcon sx={{ fontSize: 20, color: theme.palette.secondary.main }} /> },
        { name: "Docker", icon: <DockerIcon /> },
    ];

    return (
        <StyledSection id="skills">
            <Box
                position="absolute"
                width="100%"
                height="100%"
                top={0}
                left={0}
                sx={{ overflow: "hidden", zIndex: 0, opacity: 0.3 }}
            >
                <Box position="absolute" width="100%" top="20%" left="-10%">
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
                    Habilidades
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid size={{ xs: 12, md: 10, lg: 8 }}>
                        <StyledPaper>
                            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                                {skills.map((skill, index) => (
                                    <SkillChip key={index}>
                                        {skill.icon}
                                        {skill.name}
                                    </SkillChip>
                                ))}
                            </Box>
                        </StyledPaper>
                    </Grid>
                </Grid>
            </Container>
        </StyledSection>
    );
};

export default Skills;

