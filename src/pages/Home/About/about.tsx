import { Container, Grid, Typography, Paper, Box, Chip } from "@mui/material";
import styled from "@emotion/styled";
import PersonIcon from '@mui/icons-material/Person';
import StarsIcon from '@mui/icons-material/Stars';
import CodeIcon from '@mui/icons-material/Code';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useTheme } from "@mui/material/styles";
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
    '&::before': {
        content: '""',
        position: "absolute",
        top: "-50%",
        right: "-10%",
        width: "500px",
        height: "500px",
        background: `radial-gradient(circle, ${theme.palette.secondary.main}15 0%, transparent 70%)`,
        borderRadius: "50%",
        animation: "pulse 8s ease-in-out infinite",
    },
    '@keyframes pulse': {
        '0%, 100%': {
            transform: "scale(1) translate(0, 0)",
            opacity: 0.5,
        },
        '50%': {
            transform: "scale(1.2) translate(-50px, 50px)",
            opacity: 0.8,
        }
    }
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    background: `linear-gradient(135deg, ${theme.palette.primary.contrastText}15 0%, ${theme.palette.primary.contrastText}08 100%)`,
    padding: "40px",
    borderRadius: "16px",
    border: `1px solid ${theme.palette.primary.contrastText}30`,
    height: "100%",
    position: "relative",
    overflow: "hidden",
    backdropFilter: "blur(10px)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    '&::before': {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.main}80, transparent)`,
        transform: "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.4s ease",
    },
    '&::after': {
        content: '""',
        position: "absolute",
        top: "-50%",
        right: "-50%",
        width: "200px",
        height: "200px",
        background: `radial-gradient(circle, ${theme.palette.secondary.main}10 0%, transparent 70%)`,
        borderRadius: "50%",
        transition: "all 0.5s ease",
    },
    '&:hover': {
        transform: "translateY(-10px) scale(1.02)",
        boxShadow: `0 20px 50px ${theme.palette.primary.contrastText}30`,
        borderColor: `${theme.palette.secondary.main}60`,
        '&::before': {
            transform: "scaleX(1)",
        },
        '&::after': {
            transform: "scale(1.5)",
            opacity: 0.3,
        }
    }
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
    position: "relative",
    display: "inline-block",
    "&::after": {
        content: '""',
        position: "absolute",
        bottom: "-12px",
        left: 0,
        width: "80px",
        height: "5px",
        background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.main}80, transparent)`,
        borderRadius: "3px",
        transition: "width 0.3s ease",
    },
    '&:hover::after': {
        width: "120px",
    }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60px",
    height: "60px",
    borderRadius: "16px",
    background: `linear-gradient(135deg, ${theme.palette.secondary.main}40, ${theme.palette.secondary.main}20)`,
    marginBottom: "24px",
    position: "relative",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: `0 4px 15px ${theme.palette.secondary.main}30`,
    '&::before': {
        content: '""',
        position: "absolute",
        inset: "-3px",
        borderRadius: "16px",
        padding: "3px",
        background: `linear-gradient(135deg, ${theme.palette.secondary.main}50, transparent)`,
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        opacity: 0,
        transition: "opacity 0.3s ease",
    },
    '&:hover': {
        transform: "rotate(10deg) scale(1.15)",
        background: `linear-gradient(135deg, ${theme.palette.secondary.main}50, ${theme.palette.secondary.main}30)`,
        boxShadow: `0 8px 25px ${theme.palette.secondary.main}40`,
        '&::before': {
            opacity: 1,
        }
    }
}));

const HighlightChip = styled(Chip)(({ theme }) => ({
    background: `linear-gradient(135deg, ${theme.palette.secondary.main}30, ${theme.palette.secondary.main}15)`,
    border: `1px solid ${theme.palette.secondary.main}40`,
    color: theme.palette.primary.contrastText,
    fontWeight: 500,
    margin: "8px 8px 8px 0",
    transition: "all 0.3s ease",
    '&:hover': {
        transform: "translateY(-2px)",
        boxShadow: `0 4px 12px ${theme.palette.secondary.main}30`,
        background: `linear-gradient(135deg, ${theme.palette.secondary.main}40, ${theme.palette.secondary.main}25)`,
    }
}));

const About = () => {
    const theme = useTheme();

    return (
        <>
            <StyledSection id="about">
                <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    top={0}
                    left={0}
                    sx={{ overflow: "hidden", zIndex: 0, opacity: 0.3 }}
                >
                    <Box position="absolute" width="100%" top="10%" right="-10%">
                        <AnimatedBackground />
                    </Box>
                </Box>
                <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                    <Grid container spacing={{ xs: 3, md: 4 }}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box sx={{ mb: 5 }}>
                                <IconWrapper>
                                    <PersonIcon sx={{ color: theme.palette.secondary.main, fontSize: 32 }} />
                                </IconWrapper>
                                <StyledTitle
                                    variant="h2"
                                    color="primary.contrastText"
                                    sx={{ fontWeight: 700, mb: 0, fontSize: { xs: "2rem", md: "2.5rem" } }}
                                >
                                    Sobre Mim
                                </StyledTitle>
                            </Box>
                            <StyledPaper>
                                <Box sx={{ display: "flex", flexWrap: "wrap", mb: 3 }}>
                                    <HighlightChip 
                                        icon={<CodeIcon sx={{ color: theme.palette.secondary.main }} />} 
                                        label="Developer" 
                                    />
                                    <HighlightChip 
                                        icon={<TrendingUpIcon sx={{ color: theme.palette.secondary.main }} />} 
                                        label="Inovador" 
                                    />
                                </Box>
                                <Typography
                                    variant="body1"
                                    color="primary.contrastText"
                                    paragraph
                                    sx={{ 
                                        lineHeight: 1.95, 
                                        fontSize: { xs: "1rem", md: "1.15rem" },
                                        opacity: 0.95,
                                        mb: 2.5
                                    }}
                                >
                                    Olá! Sou <strong style={{ color: theme.palette.secondary.main }}>José Mário</strong>, um Desenvolvedor de Software apaixonado por criar
                                    soluções inovadoras e funcionais. Tenho experiência no desenvolvimento
                                    de aplicações web modernas usando tecnologias de ponta.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="primary.contrastText"
                                    paragraph
                                    sx={{ 
                                        lineHeight: 1.95, 
                                        fontSize: { xs: "1rem", md: "1.15rem" },
                                        opacity: 0.95,
                                        mb: 0
                                    }}
                                >
                                    Meu foco está em escrever código limpo, eficiente e escalável, sempre
                                    buscando as melhores práticas de desenvolvimento. Estou constantemente
                                    aprendendo novas tecnologias e aprimorando minhas habilidades.
                                </Typography>
                            </StyledPaper>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }} sx={{ mt: { xs: 4, md: 0 } }}>
                            <Box sx={{ mb: 5 }}>
                                <IconWrapper>
                                    <StarsIcon sx={{ color: theme.palette.secondary.main, fontSize: 32 }} />
                                </IconWrapper>
                                <StyledTitle
                                    variant="h2"
                                    color="primary.contrastText"
                                    sx={{ fontWeight: 700, mb: 0, fontSize: { xs: "2rem", md: "2.5rem" } }}
                                >
                                    Por que me escolher?
                                </StyledTitle>
                            </Box>
                            <StyledPaper>
                                <Typography
                                    variant="body1"
                                    color="primary.contrastText"
                                    paragraph
                                    sx={{ 
                                        lineHeight: 1.95, 
                                        fontSize: { xs: "1rem", md: "1.15rem" },
                                        opacity: 0.95,
                                        mb: 0
                                    }}
                                >
                                    Tenho uma abordagem <strong style={{ color: theme.palette.secondary.main }}>focada em resultados</strong>, sempre priorizando a experiência
                                    do usuário e a qualidade do código. Estou sempre disposto a aprender e
                                    adaptar-me a novas tecnologias e desafios.
                                </Typography>
                                <Box sx={{ mt: 4, pt: 3, borderTop: `1px solid ${theme.palette.primary.contrastText}15` }}>
                                    <Typography
                                        variant="body2"
                                        color="primary.contrastText"
                                        sx={{ 
                                            opacity: 0.8,
                                            fontSize: "0.9rem",
                                            fontStyle: "italic"
                                        }}
                                    >
                                        💡 Sempre em busca da excelência e da melhor solução para cada desafio.
                                    </Typography>
                                </Box>
                            </StyledPaper>
                        </Grid>
                    </Grid>
                </Container>
            </StyledSection>
        </>
    );
};

export default About;
