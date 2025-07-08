import styled from "@emotion/styled";


export const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme?.palette.primary.main,
    height: "100vh",
}));

export const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%"
}))