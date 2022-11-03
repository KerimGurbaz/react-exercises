import { Container, Box, TextField, Typography, Button } from "@mui/material";

const TextFieldComp = () => {
  let error = false;
  return (
    <>
      <Container maxWidth="md">
        <Typography
          mt={4}
          variant="h1"
          component="h3"
          align="center"
          color="error"
          sx={{ background: "lightgrey", mt: 6, border: "2px solid red" }}
        >
          TextField
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // alignItems: "center",
            gap: 2,
            mt: 4,
          }}
        >
          <TextField
            label="Email"
            type="email"
            placeholder="Enter your Email"
            error={error}
            helperText={error && "Incorrect Email"}
          />
          <TextField
            label="Password"
            type="password"
            placeholder="Enter your password"
            error={error}
            helperText={error && "Incorrect password"}
          />
          <Button type="submit" variant="contained" sx={{ mt: 3 }}>
            SUMBIT
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TextFieldComp;
