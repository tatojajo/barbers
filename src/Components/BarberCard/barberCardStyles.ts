import { styled, Box, Typography, } from "@mui/material";
import { Link } from 'react-router-dom'

export const BarberCardContainer = styled(Link)`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #f2eeee;
  padding: 0px 10px;
  border: 2px solid black;
  border-radius: 10px;
  text-decoration:none;
`;

export const BarberFullName = styled(Box)`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const Description = styled(Typography)`
  text-align: center;
  margin-top: 10px;
`;

export const SocMedia = styled(Box)`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const PriceRate = styled(Box)`
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #d0c0c0;
  border-top: 2px solid red;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
