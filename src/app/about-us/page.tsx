"use client"
import React from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation';
import { Box, Container, Stack, Typography } from '@mui/material';
import NavBar from '@/section/nav-bar';
export default function AboutUsPage() {
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
                    <Box component="img" src="https://th.bing.com/th/id/R.aef9c32465c82bf0ad78c18f91de42ac?rik=ebC8ww8XCAHTdw&pid=ImgRaw&r=0" />
                </Stack>
            </Container>
        </Box>

    )
}
