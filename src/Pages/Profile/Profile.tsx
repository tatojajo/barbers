import { useAppSelector } from "../../redux/hooks"

import { Avatar, Box, Button, Divider, Rating, TextField, Typography } from "@mui/material"
import RateReviewIcon from '@mui/icons-material/RateReview';
import { useState } from "react";



const Profile = () => {
    const [newComment, setNewComment] = useState<boolean>(true)
    const barber = useAppSelector(data => data.barber)
    const avatarUrl = `https://ui-avatars.com/api/?name=${barber?.firstName}+${barber?.lastName}`

    const textFieldStyles = {
        height: '100px'
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px' }}>
            <Box sx={{
                width: '90%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
                    <Box>
                        <Avatar sx={{ width: 80, height: 80, mt: 2, }} src={avatarUrl} />
                    </Box>
                    <Box>
                        <Typography>
                            {barber?.firstName}{barber?.lastName}
                        </Typography>
                        <Typography>
                            {barber?.description}
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Rating
                        name="fixed-rating"
                        value={barber?.rating}
                        precision={0.5}
                        readOnly
                    />
                    <Typography>
                        Price: ${barber?.price}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '90%', marginTop: '40px' }}>
                <Divider />
                <Typography display='flex' alignItems='center' gap='10px' fontWeight='900'><RateReviewIcon /> Ratings & Reviews</Typography>
                {barber?.review.map((review) => {
                    return (
                        <Box key={review.author} sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box>
                                <Typography>{review.comment}</Typography>
                                <Rating
                                    name="fixed-rating"
                                    value={review?.score}
                                    precision={0.5}
                                    readOnly
                                />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', minWidth: '50px' }}>
                                <Typography variant='subtitle2'>Author</Typography>
                                <Typography fontWeight='700' variant='body1'>{review.author}</Typography>
                            </Box>
                        </Box>
                    )
                })}
                <Divider />
            </Box>
            <Box sx={{ display: 'flex', width: '90%', justifyContent: 'space-between', padding: '20px' }}>
                <Box>
                    <Avatar />
                </Box>
                <Box sx={{ width: '80%' }}>
                    <TextField InputProps={{
                        style: textFieldStyles
                    }}
                        disabled={newComment}
                        fullWidth label='Comment' />
                </Box>
                <Box>
                    <Button disabled={newComment} variant="contained">Add</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Profile
