import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";


export default function NavBar() {
    const router = useRouter();
    return (
        <Stack direction="row" justifyContent='space-evenly' alignItems='center' spacing={2}
            sx={{ height: 48, width: 1, bgcolor: "white", boxShadow: 10 }}
        >
            {/* <Typography onClick={()=>router.push("/home")}>หน้าแรก</Typography>
            <Typography onClick={() => router.push("/about-us")}>about us</Typography>
            <Typography onClick={()=>router.push("/people-contract")}>บริการบุคคล</Typography>
            <Typography>บริการองค์กร</Typography>
            <Typography>ถามตอบ</Typography>
            <Typography>บทความ</Typography>
            <Typography>ติดต่อ</Typography> */}
            <Button onClick={() => router.push("/home")}>Homepage</Button>
            <Button onClick={() => router.push("/about-us")}>About us</Button>
            <Button onClick={() => router.push("/people-contract")}>Privatesevice</Button>
            <Button>Companysevice</Button>
            <Button>Ask&answer</Button>
            <Button>Dialog</Button>
            <Button>Conection</Button>
        </Stack>
    )
}