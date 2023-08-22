import { FC } from "react"

import { useAppDispatch } from "../../redux/hooks"
import { barberDetails } from "../../redux/actions"
import { LinkedIn, Facebook, Instagram, StarBorderOutlined } from "@mui/icons-material"
import { Avatar, Box, Typography } from "@mui/material"
import { BarberCardContainer, BarberFullName, Description, SocMedia, PriceRate } from "./barberCardStyles"
import { BarberItem } from "../../@types/general"



type BarberCardProps = {
    barber: BarberItem
}

const BarberCard: FC<BarberCardProps> = ({ barber }) => {
    const dispatch = useAppDispatch()
    const avatarUrl = `https://ui-avatars.com/api/?name=${barber.firstName}+${barber.lastName}`
    const openBarberDetails = () => {
        dispatch(barberDetails(barber))
    }
    return (
        <BarberCardContainer onClick={openBarberDetails} to={`/barber/${barber.firstName}`}>
            <Avatar sx={{ width: 80, height: 80, mt: 2, }} src={avatarUrl} />
            <BarberFullName>
                <Typography variant="h5" color="initial">
                    {barber.firstName}
                </Typography>
                <Typography variant="h5" color="initial" ml={1}>
                    {barber.lastName}
                </Typography>
            </BarberFullName>
            <Box>
                <Description variant="subtitle2" color="initial">
                    {barber.description}
                </Description>
            </Box>
            <SocMedia>
                <Avatar sx={{ width: 30, height: 30, bgcolor: "#0A66C2" }}>
                    <LinkedIn />
                </Avatar>
                <Avatar sx={{ width: 30, height: 30, bgcolor: "#1877F2" }}>
                    <Facebook />
                </Avatar>
                <Avatar sx={{ width: 30, height: 30, bgcolor: "#E4405F" }}>
                    <Instagram />
                </Avatar>
            </SocMedia>
            <PriceRate>
                <Typography variant="h6" color="initial">
                    <strong>Price:</strong> ${barber.price}
                </Typography>
                <Typography
                    variant="h6"
                    color="initial"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StarBorderOutlined />
                    {barber.rating}
                </Typography>
            </PriceRate>
        </BarberCardContainer>
    )
}

export default BarberCard