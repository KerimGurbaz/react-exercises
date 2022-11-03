import { TextField } from "@mui/material";
import Navbar from "../components/AppBarComp";
import CardGrid from "../components/CardGrid";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <TypoButtons /> */}
      {/* <TextFieldComp /> */}
      <CardGrid />
    </>
  );
};

export default Home;
