import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
export default function Semester() {
    const [semesters, setSemesters] = React.useState(["Semestre1", "Semestre2"])


const navigate=useNavigate()

const location = useLocation()
const {field}=location.state
    return (
        <div className='d-flex  justify-content-center align-items-center gap-5 ' style={{ height: "80vh" }}>
         
            {semesters.map((elem, i) => (
                <Card sx={{ maxWidth: 345 }} key={i} style={{ backgroundColor: "#A020F0" ,color:"white" ,height:"150px",width:"700px"}} onClick={() => { navigate("/cours",{state:{elem,field:field.title}})}}>
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
