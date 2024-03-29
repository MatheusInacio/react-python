import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#F52273',
        },
        secondary: {
            main: '#F5F5F5',
        },
        text: {
            primary: '#333333',
            secondary: '#6c6767',
        },
    },
    shape: {
        borderRadius: 3,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#FFF',
                    borderRadius: '5',
                    backgroundColor: '#F52273',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    ":hover": {
                        backgroundColor: '#F52273',
                    }

                },
            },
        },
        MuiTextField: {
            defaultProps: {
                InputLabelProps: {
                    required: false,
                },
                required: true,
            },
        },
    },
});

export default theme;