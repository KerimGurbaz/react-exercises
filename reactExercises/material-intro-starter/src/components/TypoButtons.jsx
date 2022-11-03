import { Typography } from "@mui/material";

const TypoButtons = () => {
  return (
    <div>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusamus
        ad, ut deserunt cum temporibus quo suscipit perspiciatis impedit
        placeat, ratione nobis recusandae eligendi nisi eveniet quas eius!
        Numquam sapiente ipsa iusto voluptates molestias voluptatum
        necessitatibus exercitationem temporibus officia, perferendis pariatur
        quibusdam a ratione, possimus dolor, mollitia consequuntur? Sapiente,
        quod.
      </Typography>
    </div>
  );
};

export default TypoButtons;
