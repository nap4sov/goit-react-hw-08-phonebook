import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: { padding: '16px' },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: { marginBottom: '8px' },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    background: 'transparent',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: 'black',
                },
                h4: {
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 700,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    alignItems: 'center',
                    background: 'rgba(200,200,200,0.5)',
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                root: { paddingRight: 0 },
                avatar: { marginRight: 0 },
            },
        },
        MuiCardActions: {
            styleOverrides: {
                root: { marginLeft: 'auto' },
            },
        },
        MuiCircularProgress: {
            styleOverrides: {
                root: { color: 'white' },
            },
        },
    },
});

export default theme;
