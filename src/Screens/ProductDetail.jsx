import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';
import { useParams, useNavigate } from "react-router-dom";
import ProductData from '../ProductData';

const ProductDetail = () => {
    const { id } = useParams();
    const product = ProductData.find((e) => e.id === +id);
    const navigate = useNavigate();

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleGoBack = () => {
        navigate('/product');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <Card sx={{ width: 400, borderRadius: 2, boxShadow: 3 }}>
                <CardMedia
                    sx={{ height: 300 }}
                    component="img"
                    image={product.image}
                    alt={product.title}
                />
                <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
                        {product.title}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 2, fontWeight: 'lighter' }}>
                        {product.category}
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" color="text.secondary">
                                Price: ${product.price}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" color="text.secondary">
                                Rating: {product.rating.rate} / 5
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2" color="text.secondary">
                                Reviews: {product.rating.count}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleGoBack}>Go Back</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default ProductDetail;
