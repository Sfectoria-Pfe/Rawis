import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Feild() {
  const [fields, setFields] = React.useState([])

  const fetchFeilds = async () => {
    const res = await axios.get('http://localhost:4000/fields')
    setFields(res.data)

  }
React.useEffect(() => {
  fetchFeilds()
}, [])
const navigate = useNavigate()
  return (
    <div className='d-flex flex-wrap justify-content-center align-items-center  '>
      {fields.map((field) => (
        <div className='col-5 gap-5 d-flex flex-wrap justify-content-center align-items-center mt-3'>
        <Card sx={{ maxWidth: 345 }} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={field?.imgUrl}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               {field?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {field?.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => navigate("semester",{state:{field}})}>
              Consulter
            </Button>
          </CardActions>
        </Card>
        </div>
      ))}

    </div>
  );
}