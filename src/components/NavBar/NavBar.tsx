import styled from "@emotion/styled";
import { AppBar, Toolbar, Box, Typography, Button, IconButton, Menu, MenuItem, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const StyledNavBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme?.palette.primary.main,
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.primary.contrastText}20`,
    position: "fixed",
    top: 0,
    zIndex: 1000,
}));

const NavButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: 400,
    padding: "8px 20px",
    borderRadius: "8px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    '&:hover': {
        backgroundColor: `${theme.palette.primary.contrastText}15`,
        transform: "translateY(-2px)",
    },
    '&:active': {
        transform: "translateY(0px)",
    }
}));

const NavBar = () => {
    const theme = useTheme();
    const muiTheme = useMuiTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    // Função de easing para scroll suave e elegante
    const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const smoothScrollTo = (targetY: number, duration: number = 800) => {
        const startY = window.pageYOffset;
        const distance = targetY - startY;
        let startTime: number | null = null;

        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Aplica easing para animação suave
            const easedProgress = easeInOutCubic(progress);
            
            window.scrollTo(0, startY + distance * easedProgress);

            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // Obtém a altura real da navbar dinamicamente
            const navbar = document.getElementById('navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 64;
            
            // Calcula a posição para que o conteúdo fique bem próximo do topo
            const elementRect = element.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            // Offset negativo máximo para fazer o conteúdo aparecer o máximo possível no topo
            const offsetPosition = absoluteElementTop - navbarHeight - 80;
            const targetPosition = Math.max(0, offsetPosition);

            // Usa scroll suave customizado
            smoothScrollTo(targetPosition, 800);
        }
        setAnchorEl(null);
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const navItems = [
        { label: "Início", id: "hero" },
        { label: "Sobre", id: "about" },
        { label: "Habilidades", id: "skills" },
        { label: "Projetos", id: "projects" },
    ];

    return (
        <StyledNavBar id="navbar">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        color: theme.palette.primary.contrastText,
                        fontWeight: 600,
                        cursor: "pointer",
                    }}
                    onClick={() => scrollToSection("hero")}
                >
                </Typography>
                {isMobile ? (
                    <>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenuOpen}
                            sx={{ color: theme.palette.primary.contrastText }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={() => setAnchorEl(null)}
                            PaperProps={{
                                sx: {
                                    backgroundColor: theme.palette.primary.main,
                                    border: `1px solid ${theme.palette.primary.contrastText}20`,
                                }
                            }}
                        >
                            {navItems.map((item) => (
                                <MenuItem
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    sx={{
                                        color: theme.palette.primary.contrastText,
                                        '&:hover': {
                                            backgroundColor: `${theme.palette.primary.contrastText}10`,
                                        }
                                    }}
                                >
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                ) : (
                    <Box sx={{ display: "flex", gap: 1 }}>
                        {navItems.map((item) => (
                            <NavButton key={item.id} onClick={() => scrollToSection(item.id)}>
                                {item.label}
                            </NavButton>
                        ))}
                    </Box>
                )}
            </Toolbar>
        </StyledNavBar>
    );
};

export default NavBar;
