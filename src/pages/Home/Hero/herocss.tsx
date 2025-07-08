import styled from "@emotion/styled";
import type { Theme } from "@mui/material/styles";

export const StyledHero = styled("div")<{ theme?: Theme; }>(({ theme }) => ({
    backgroundColor: theme?.palette.primary.main,
    height: "100vh",
}));

export const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%"
}))