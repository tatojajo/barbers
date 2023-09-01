import { useEffect, useState } from "react";
import { useFormik } from "formik";

import { Avatar, Box, Button, Divider, Paper, Rating, TextField, Typography } from "@mui/material"
import RateReviewIcon from '@mui/icons-material/RateReview';
import { BarberItem } from "../../@types/general";
import { useParams } from "react-router-dom";



const textFieldStyles = {
    height: '100px'
};




const Profile = () => {
    const [barber, setBarber] = useState<BarberItem | null>(null);
    const { id } = useParams();
    const [score, setScore] = useState(0);
    const [comment, setComment] = useState<string>('')
    const user = localStorage.getItem('userName')
    const avatarUrl = `https://ui-avatars.com/api/?name=${barber?.firstName}+${barber?.lastName}`


    useEffect(() => {
        const getBarber = async () => {
            const resp = await fetch("/data.json");
            const json = await resp.json();
            const barber = json.find((barber: BarberItem) => barber.id === id);
            setBarber(barber);
        };
        getBarber();

    }, [id]);


    const onSubmit = (e) => {
        e.preventDefault()
        const previousReviews = barber?.review || [];
        const newReview = { comment: comment, author: user, score: score };
        const newReviews = [...previousReviews, newReview];
        const updatedBarber = { ...barber, review: newReviews };
        setBarber(updatedBarber);
        setComment('')
        setScore(0)
    }

    const handleRatingChange = (event: any, newValue: any) => {
        setScore(newValue);
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
                {barber?.review.map((review, index) => {
                    return (
                        <Box key={index} sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
            <Paper style={{ width: '80%' }}>
                <form onSubmit={(e) => onSubmit(e)}>
                    <Box sx={{ display: 'flex', width: '90%', justifyContent: 'space-between', padding: '20px' }}>
                        <Box>
                            <Avatar />
                        </Box>
                        <Box sx={{ width: '80%' }}>
                            <TextField value={comment} onChange={(e) => setComment(e.target.value)} name="comment" InputProps={{
                                style: textFieldStyles,

                            }}
                                fullWidth label='Comment' />
                            <Rating
                                name="rating"
                                value={score}
                                onChange={handleRatingChange}
                                precision={0.5}
                            />
                        </Box>
                        <Box>
                            <Button disabled={!user} type="submit" variant="contained">Add</Button>
                        </Box>
                    </Box>
                </form>
            </Paper>
        </Box>
    )
}

export default Profile
