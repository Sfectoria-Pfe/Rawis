import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
export default function Semester() {
    const [semesters, setSemesters] = React.useState(["Semestre1", "Semestre2"])
const {feildId}=useParams()
const navigate=useNavigate()


    return (
        <div className='d-flex  justify-content-center align-items-center gap-5 ' style={{ height: "80vh" }}>
         
            {semesters.map((elem, i) => (
                <Card sx={{ maxWidth: 345 }} key={i} style={{ backgroundColor: "#A020F0" ,color:"white" ,height:"150px",width:"700px"}} onClick={() => { navigate(`/${feildId}/${elem}/cours`)}}>
                    <CardActionArea>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='d-flex  justify-content-center align-items-center h-100'>
                                {elem}
                            </Typography>

                        </CardContent>
                    </CardActionArea>

                </Card>
            ))}

        </div>
    )
}
