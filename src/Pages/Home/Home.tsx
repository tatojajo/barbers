import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { saveBarbersData } from "../../redux/actions";
import BarberCard from "../../Components/BarberCard";
import { styled } from "@mui/material";


const HomePage = styled('div')({
  display: 'grid',
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  rowGap: '15px',
  placeItems: 'center',
  marginTop: '20px'
});



const Home = () => {
  const dispatch = useAppDispatch()
  const  barbers  = useAppSelector(data => data.barbers)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/data.json");
      const json = await response.json();
      dispatch(saveBarbersData(json))
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
