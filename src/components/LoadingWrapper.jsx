import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function LoadingWrapper({children}) {
  return (
    <Suspense  fallback={<Loading />}>
        <Outlet />
    </Suspense>
    );
}

const Loading = () => {
    return (
    <Box sx={{ width: '100%' }}>
        <LinearProgress />
    </Box>
    )
}

