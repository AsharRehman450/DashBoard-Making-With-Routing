import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

export default function ProductCard({ ProductTitle,ProductDesc, ProductImage, id }) {
    const navigate = useNavigate();

    return (
        <Card sx={{
            width: 345, 
            height: 450, 
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: 3,
            borderRadius: 2,
        }}>
            <CardMedia
                sx={{
                    height: 200,  
                    borderRadius: "10px",
                    margin: "20px auto",
                    width: "90%", 
                    objectFit: "cover",
                }}
                component="img"
                alt={ProductTitle}
                image={ProductImage}
            />
            <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>  
                <Typography gutterBottom variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
                    {ProductTitle}
                </Typography>
                <Typography variant="body2" sx={{
                    color: 'text.secondary',
                    textAlign: "center",
                    minHeight: "40px", 
                    overflow: "hidden",
                }}>
                    {ProductDesc}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 2 }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(`/product/${id}`)}
                    sx={{
                        textTransform: 'none',
                        borderRadius: 2,
                        padding: '6px 16px',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        '&:hover': {
                            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)',
                        }
                    }}
                >
                    View Details
                </Button>
            </CardActions>
        </Card>
    );
}
