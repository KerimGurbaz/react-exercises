import { Container, Button, Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const TypoButtons = () => {
  return (
    <div>
      <Container maxWidth="md">
        {" "}
        <Typography
          variant="h1"
          component="h3"
          align="center"
          color="error"
          sx={{ background: "lightgrey", mt: 6, border: "2px solid red" }}
        >
          Typography , buttons,
        </Typography>
        <Typography variant="body2" align="justify" color="succsess">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          accusamus ad, ut deserunt cum temporibus quo suscipit perspiciatis
          impedit placeat, ratione nobis recusandae eligendi nisi eveniet quas
          eius! Numquam sapiente ipsa iusto voluptates molestias voluptatum
          necessitatibus exercitationem temporibus officia, perferendis pariatur
          quibusdam a ratione, possimus dolor, mollitia consequuntur? Sapiente,
          quod.
        </Typography>
        <Typography
          variant="button"
          align="justify"
          color="secondary"
          sx={{ display: "inline-block", mt: 4 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          accusamus ad, ut deserunt cum temporibus quo suscipit perspiciatis
          impedit placeat, ratione nobis recusandae eligendi nisi eveniet quas
          eius! Numquam sapiente ipsa iusto voluptates molestias voluptatum
          necessitatibus exercitationem temporibus officia, perferendis pariatur
          quibusdam a ratione, possimus dolor, mollitia consequuntur? Sapiente,
          quod.
        </Typography>
      </Container>

      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // alignItems: "center",
            gap: 2,
            mt: 4,
          }}
        >
          <Button variant="contained">Click</Button>
          <Button variant="outlined" color="success" startIcon={<SendIcon />}>
            Send
          </Button>

          <Button variant="contained" color="error" endIcon={<DeleteIcon />}>
            DELETE
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default TypoButtons;
