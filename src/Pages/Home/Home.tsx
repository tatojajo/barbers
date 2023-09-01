import { FC, useEffect, useState } from "react";
import BarberCard from "../../Components/BarberCard";
import { styled } from "@mui/material";
import { BarberItem } from "../../@types/general";


const HomePage = styled('div')({
  display: 'grid',
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  rowGap: '15px',
  placeItems: 'center',
  marginTop: '20px'
});



const Home = () => {
  const [barbers, setBarbers] = useState<BarberItem[]>([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/data.json");
      const json = await response.json();
      setBarbers(json)
    }

    fetchData();
  }, []);

  return (
    <HomePage>
      {barbers!.map((barber, index) => {
        return (
          <BarberCard key={index} barber={barber} />
        )
      })}
    </HomePage>
  )
}

export default Home
