import React from 'react'
import { Card, CardContent, Typography, Button, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import img from '../img/pdf.png'


const CoursCard = ({ row }) => {
console.log(row,"this is row")
    const navigate=useNavigate()

    return (
        <Card sx={{ maxWidth: 200, margin: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image={img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {row?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {row?.description}
                </Typography>
            </CardContent>
            <Button size="small" onClick={()=>(navigate(`${row?.id}`))}>View</Button>
        </Card>
    );

}

export default CoursCard
