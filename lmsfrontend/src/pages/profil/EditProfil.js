import React, { useContext, useState } from 'react'
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomInput from "./CustomInput";
import { MyContext } from '../../router/Router';
import axios from 'axios';
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditProfil = ({ update, setUpdate }) => {

  const usr = useContext(MyContext)
  const [value, setValue] = useState("one");
  const [preview, setPreview] = useState("");
  const [image, setImage] = useState(usr.imgUrl);
  const navigate = useNavigate()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // FORM STATES
  const [user, setUser] = useState({
    // DEFAULT VALUES
    nom: usr.nom,
    prenom: usr.prenom,
    phone: usr.phone,
    email: usr.email,
    imgUrl: usr.imgUrl
  });

  const changeField = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    console.log("user: ", user);
  };


  // EDIT -> UPDATE
  const handleSubmit = async () => {
    try {

      const formDta = new FormData()
      formDta.append('file', image)


      const responseImage = await axios.post("http://localhost:4000/upload", formDta)

      const userWithImg = { ...user, imgUrl: responseImage.data.path }

      const response = await axios.patch(`http://localhost:4000/auth/${usr.id}`, userWithImg)
      console.log(response.data, "responseee");
      toast.success("votre profil a été modifie!");
      localStorage.setItem("token", JSON.stringify(response.data))
      setUpdate(!update)
      navigate(-1)
    } catch (error) {
      console.log(error)
      toast.error("Error")
    }
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
    setImage(file)
  };
  return (
    <div className='d-flex justify-content-center mt-5'>

      <Card sx={{ height: "100%", width: "80%" }}>
        {/* TABS */}
        <br></br>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab value="one" label="Information Personnel" />
        </Tabs>
        <Divider className='mb-3'></Divider>

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >

          <input type="file" className="position-absolute" style={{ opacity: 0, top: "21%", zIndex: 5, height: "20%", width: "11%" }} onChange={handleFileChange} />
          <Badge className="position-relative"
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <PhotoCameraIcon
                sx={{
                  border: "5px solid white",
                  backgroundColor: "#ff558f",
                  borderRadius: "50%",
                  padding: ".2rem",
                  width: 35,
                  height: 35
                }}
              ></PhotoCameraIcon>
            }
          >
            <Avatar
              sx={{ width: 100, height: 100, mb: 1.5 }}
              src={preview ? preview : user.imgUrl}
            ></Avatar>
          </Badge>
        </Grid>

        {/* MAIN CONTENT CONTAINER */}
        <form>
          <CardContent
            sx={{
              p: 3,
              maxHeight: { md: "40vh" },
              textAlign: { xs: "center", md: "start" }
            }}
          >
            {/* FIELDS */}
            <FormControl fullWidth>
              <Grid
                container
                direction={{ xs: "column", md: "row" }}
                columnSpacing={5}
                rowSpacing={3}
              >
                {/* ROW 1: FIRST NAME */}
                <Grid component="form" item xs={6}>
                  <CustomInput
                    name="nom"
                    value={user.nom}
                    onChange={changeField}
                    title="Nom"

                  ></CustomInput>
                </Grid>

                {/* ROW 1: LAST NAME */}
                <Grid component="form" item xs={6}>
                  <CustomInput
                    name="prenom"
                    value={user.prenom}
                    onChange={changeField}
                    title="Prénom"

                  ></CustomInput>
                </Grid>

                {/* ROW 3: PHONE */}
                <Grid item xs={6}>
                  <CustomInput
                    name="phone"
                    value={user.phone}
                    onChange={changeField}
                    title="Téléphone"

                    //DIALING CODE
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">216+</InputAdornment>
                      )
                    }}
                  ></CustomInput>
                </Grid>

                {/* ROW 3: EMAIL */}
                <Grid item xs={6}>
                  <CustomInput
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={changeField}
                    title="Address e-mail"

                  ></CustomInput>
                </Grid>

                {/* BUTTON */}
                <Grid
                  container
                  className='d-flex justify-content-center w-100'
                  item

                >
                  <Button
                    sx={{ p: "1rem 2rem", my: 2, height: "3rem" }}
                    component="button"
                    size="large"
                    variant="contained"
                    color="secondary"
                    onClick={handleSubmit}
                  >
                    Confirmer
                  </Button>
                </Grid>
              </Grid>
            </FormControl>
          </CardContent>
        </form>
      </Card>
    </div>

  )
}

export default EditProfil
