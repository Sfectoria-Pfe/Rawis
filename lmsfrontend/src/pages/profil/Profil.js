// IMPORTS
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { MyContext } from "../../router/Router";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// STYLES
const styles = {
  details: {
    padding: "1rem",
    borderTop: "1px solid #e1e1e1"
  },
  value: {
    padding: "1rem 2rem",
    borderTop: "1px solid #e1e1e1",
    color: "#899499"
  }
};

//APP
const Profil = () => {

  const user = useContext(MyContext)
  const navigate = useNavigate()

  return (

    <div className='d-flex justify-content-center mt-5'>

      <Card variant="outlined" sx={{ height: "100%", width: "80%" }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {/* CARD HEADER START */}
          <Grid item sx={{ p: "1.5rem 0rem", textAlign: "center" }}>
            {/* PROFILE PHOTO */}


            <Avatar
              sx={{ width: 100, height: 100, mb: 1.5 }}
              src={user.imgUrl}
            ></Avatar>


            {/* DESCRIPTION */}
            <Typography variant="h6">{user.nom} {user.prenom}</Typography>
          </Grid>
          {/* CARD HEADER END */}

          {/* DETAILS */}
          <Grid container>
            <Grid item xs={6}>
              <Typography style={styles.details}>Nom</Typography>
              <Typography style={styles.details}>Prénom</Typography>
              <Typography style={styles.details}>Email</Typography>
              <Typography style={styles.details}>Téléphone</Typography>
              {(user.role == "Enseignant") && <Typography style={styles.details}>Matière</Typography>
              }          </Grid>
            {/* VALUES */}
            <Grid item xs={6} sx={{ textAlign: "end" }}>
              <Typography style={styles.value}>{user.nom}</Typography>
              <Typography style={styles.value}>{user.prenom}</Typography>
              <Typography style={styles.value}>{user.email}</Typography>
              <Typography style={styles.value}>{user.phone}</Typography>
              {(user.role == "Enseignant") && <Typography style={styles.value}></Typography>
              }          </Grid>
          </Grid>

          {/* BUTTON */}
          <Grid item style={styles.details} sx={{ width: "60%", display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "50%", p: 1, my: 2 }}
              onClick={() => navigate(`/editProfil`)}>
              Modifer
            </Button>
          </Grid>
        </Grid>
      </Card>
    </div>

  );
}
export default Profil;