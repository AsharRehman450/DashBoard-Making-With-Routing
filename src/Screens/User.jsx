import React, { useEffect } from 'react';
import UsersData from "../UsersData.jsx";
import UserCard from "../Screens/UserCard.jsx";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const User = () => {

    useEffect(() => {
      // console.log(UsersData);
    }, []);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "100%" }}>
        <h1 style={{ textAlign: 'center' }}>Member Directory</h1>

        

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
            UsersData && UsersData.map((e, i) => {
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
                  <UserCard
                    id={e.id}
                    CardName={e.firstName}
                    CardMidName={e.maidenName}
                    CardLastName={e.lastName}
                    Cardusername={e.username}
                    CardImage={e.image}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
    );
}

export default User;
