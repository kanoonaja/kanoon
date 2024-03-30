"use client"
import React from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation';
import { Stack, Typography } from '@mui/material';
import NavBar from '@/section/nav-bar';

export default function PeopleCorntractPage() {
    return (
        <main className={styles.main}>
            <NavBar />
            <div>people-contract-page</div>
        </main>

    )
}
