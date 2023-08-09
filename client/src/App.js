import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import './App.css';
import { Container } from "@mui/material";
import Header from "./Components/Header";
import MainFeaturedPost from "./Components/MainFeaturedPost";
import { mainFeaturePost } from "./data";
import FeaturedPet from "./Components/FeaturedPet";
import Grid from '@mui/material/Grid';
import Footer from "./Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "./redux/actions/categories";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { fetchAllPets } from "./redux/actions/pets";
import Router from "./router";
import SnackBarComponent from "./Components/SnackbarComponent";

const sections = [{ title: "All Pets", url: '/' }];

const theme = createTheme({
  typography: {
    fontFamily: `"Trebuchet MS","Helvetica","Arial",sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
})

const App = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories.allCategories);
  const pets = useSelector((state) => state.pets.allPets);
  console.log({ allCategories });
  useEffect(() => {
    fetchAllCategories({ dispatch });
    fetchAllPets({ dispatch });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Container maxWidth='lg'>
          <Header allCategories={[
            ...sections,
            ...allCategories.map((category) => ({
              title: category?.name,
              url: `/${category?._id}`,
            })),
          ]} />
          {/* <MainFeaturedPost mainFeaturePost={mainFeaturePost} />
          <Grid container spacing={4}>
            {pets.map((pet) => (

              <FeaturedPet key={pet._id} pet={pet} />
            ))}

          </Grid> */}
          <main>
            <SnackBarComponent />

            <Router />
          </main>

        </Container>
        <Footer title="Pet Adoption Center" description="Every Pet Deserves a Good Home " />
      </BrowserRouter>

    </ThemeProvider>
  );
};

export default App;
