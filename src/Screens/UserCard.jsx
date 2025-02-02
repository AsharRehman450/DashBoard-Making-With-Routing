import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

export default function UserCard({ id,CardName,CardMidName,CardLastName,Cardusername,CardImage}) {
  const navigate = useNavigate();

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{
          height: 200,
          borderRadius:"50%",
          margin:"20px auto",
          boxShadow:3,
          width:200,

        }}
        image={CardImage}
        title={`${CardName} ${CardMidName} ${CardLastName}`}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {CardName} {CardMidName} {CardLastName}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          @{Cardusername}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            navigate(`/users/${id}`);
          }}
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
    </>
  );
}
