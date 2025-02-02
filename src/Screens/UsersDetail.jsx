import React from 'react';
import { useParams } from "react-router-dom";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Paper } from '@mui/material';
import { useNavigate } from "react-router-dom";
import UsersData from '../UsersData';

const UsersDetail = () => {
    const { id } = useParams();
    const product = UsersData.find((e) => e.id === +id);
    const navigate = useNavigate();

    if (!product) {
        return <div>User not found</div>;
    }

    const handleGoBack = () => {
        navigate('/users');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <Card sx={{ width: 400, borderRadius: 2, boxShadow: 3 }}>
                <CardMedia
                    sx={{ height: 300 }}
                    image={product.image}
                    title={`${product.firstName} ${product.lastName}`}
                />
                <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
                        {product.firstName} {product.lastName}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 2, fontWeight: 'lighter' }}>
                        {product.maidenName ? `Maiden Name: ${product.maidenName}` : 'No Maiden Name Provided'}
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="body2" color="text.secondary">
                                Age: {product.age}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" color="text.secondary">
                                Gender: {product.gender}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" color="text.secondary">
                                Email: {product.email}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" color="text.secondary">
                                Phone: {product.phone}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" color="text.secondary">
                                Blood Group: {product.bloodGroup}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" color="text.secondary">
                                Height: {product.height} cm
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" color="text.secondary">
                                Weight: {product.weight} kg
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" color="text.secondary">
                                Eye Color: {product.eyeColor}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleGoBack}>Go Back</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default UsersDetail;
