import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Container = styled(Stack)(({ theme }) => ({
    height: '90vh',
    padding: theme.spacing(2),
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        background: "#FBFDFF",
    },
}));

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return <Container direction="column" justifyContent="space-between">{children}</Container>;
}