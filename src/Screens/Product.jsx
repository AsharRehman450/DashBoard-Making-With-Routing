import React from 'react';
import ProductData from "../ProductData.jsx";
import ProductCard from "../Screens/ProductCard.jsx";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Product = () => {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "100%" }}>
            <h1 style={{ textAlign: 'center' }}>Explore Collection</h1>

            <br /><br /><br />

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 40,
                maxWidth: '100%',
                padding: '0 20px',
                justifyItems: 'center',
                textAlign: 'center',
                color: 'black',
            }}>
                {
                    ProductData && ProductData.map((e, i) => {
                        return (
                            <div
                                key={i}
                                style={{
                                    flex: '1 1 calc(33.33% - 40px)',
                                    boxSizing: 'border-box',
                                    maxWidth: 'calc(33.33% - 40px)',
                                    backgroundColor: '#f4f6f8',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    padding: '16px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                                }}
                            >
                                <ProductCard
                                    id={e.id}
                                    ProductTitle={
                                        <div style={{
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            fontWeight: 'bold',
                                        }}>
                                            {e.title}
                                        </div>
                                    }
                                    ProductDesc={
                                        <div style={{
                                            marginTop: '8px',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: 'block',
                                            whiteSpace: 'nowrap',
                                            color: '#555', 
                                        }}>
                                            {e.description.slice(0, 90)}
                                        </div>
                                    }
                                    ProductImage={e.image}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Product;
