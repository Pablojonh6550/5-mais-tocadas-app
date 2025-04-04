
import { AppBar, Toolbar, Typography, Button, Box, Container } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: alpha(theme.palette.common.white, 0.15),
  backgroundColor: "#2b2b2b",
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  padding: '4px 10px',
}));

const NavBar: React.FC = () => {
  return (
    <AppBar position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 20px)',
      }}>
      <Container maxWidth="lg">
        <StyledToolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
            Startup 3
          </Typography>

          {/* Buttons */}
          <Box>
            <Button sx={{ color: "#fff", textTransform: "none", fontSize: "14px", borderRadius: "6px", marginRight: "10px", padding: "4px 14px" }}>Sign In</Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3C50E0",
                color: "white",
                borderRadius: "6px",
                textTransform: "none",
                fontSize: "14px",
                padding: "4px 14px"
              }}
            >
              Sign Up
            </Button>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;