import {createTheme, ThemeProvider} from '@mui/material/styles'

type ThemeProp = {
    children: JSX.Element
};

export enum themePalette{
    BG = '#ACB1D6',
    MODAL = '#8294C4',
    OK = 'FFEAD2',
    CANCEL = 'DBDFEA'
}

const theme = createTheme({
    palette: {
        background:{
            default: themePalette.BG
        },
        primary:{
            main: themePalette.OK
        }
    },
})

export const ThemeConfig: React.FC<ThemeProp>= ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}