import { Box, LinearProgress } from '@mui/material';

const LoadingStrip = () => {
    return (
        <Box sx={{ width: '50%', margin: '0 auto' }}>
            <LinearProgress />
        </Box>
    );
};

export default LoadingStrip;
