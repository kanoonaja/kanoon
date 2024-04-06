"use client"
import React from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation';
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import NavBar from '@/section/nav-bar';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useForm } from 'react-hook-form';
export default function AboutUsPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <Box sx={{ height: "100vh", width: 1 }}>

            <NavBar />
            <Container maxWidth="xl" sx={{ mt: 4 }}>

                <Stack>
                    <Stack>
                        <Typography variant='h3'>
                            เกี่ยวกับเรา
                        </Typography>
                        <Typography variant='body2'>
                            สวัสดีครับผม ผมชื่อขนุน ชื่อจริงชื่อศิลา บุราสัย เป็นเจ้าของบริษัท hippyจำกัดนะครับ ทำงานมามากกว่า 20ปี และตอนนี้กใกล้จะล้มละลายเเล้ว <br />
                            จึงอยากมาบอกผู้ลงทุนทุกคนว่า ผมขอโทษครับ คราวหน้าจะเลือกลงทุนอะไรก็เลือกดีๆ หน่อยนะครับ สู้ๆ
                        </Typography>
                    </Stack>
                    {/* <Box component="img" src="https://th.bing.com/th/id/R.aef9c32465c82bf0ad78c18f91de42ac?rik=ebC8ww8XCAHTdw&pid=ImgRaw&r=0" /> */}
                </Stack>
                <Grid2 container spacing={2}>
                    <Grid2 xs={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Stack>
                                <TextField label="ชื่อ-นามของคุณ" variant="standard" {...register("name")} />
                                <TextField label="อีเมล" variant="standard" {...register("email")} />
                                <TextField type='number' label="เบอร์โทร" variant="standard" {...register("numnum")} />
                                <TextField label="หัวข้อที่ต้องการสอบถาม" variant="standard" {...register("askme")} />
                                <TextField label="ขอigหน่อยครับ" variant="standard" {...register("igpls")} />
                                <Button type={"submit"}>ส่งข้อความ</Button>
                            </Stack>
                        </form>


                    </Grid2>
                    <Grid2 xs={6}>
                        <Stack>
                            <Typography align={"center"} variant='h1'>contact me plssss</Typography>
                            <Typography align={"center"} >โปรดรอ 3 ถึง 4 เดือนสำหรับผู้ชายและ 1ชม.สำหับผู้หญิง</Typography>
                        </Stack>
                    </Grid2>
                </Grid2>

            </Container>
        </Box>

    )
}
