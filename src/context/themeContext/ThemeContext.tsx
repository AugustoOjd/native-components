import { createContext, useEffect, useReducer } from "react";
import { Appearance, AppState, useColorScheme } from "react-native";
import { lightTheme, themeReducer, ThemeState, darktTheme } from './themeReducer';

interface IThemeContextProps {
    theme:          ThemeState,
    setDarkTheme:   () => void
    setLightTheme:  () => void
}


export const ThemeContext = createContext({} as IThemeContextProps);

export const ThemeProvider = ({children}:any) => {

    // ------------------- reducer solo para IOS
    // const colorScheme = useColorScheme()
    // const [theme, dispatch] = useReducer(themeReducer, (colorScheme === 'dark') ? darktTheme : lightTheme)
    // useEffect(() => {
    //     ( colorScheme === 'light')
    //         ? setLightTheme()
    //         : setDarkTheme()
    // }, [colorScheme])
    // ------------------------

    const [theme, dispatch] = useReducer(themeReducer, (Appearance.getColorScheme() === 'dark') ? darktTheme : lightTheme)
    
    useEffect(() => {

        AppState.addEventListener( 'change', (status)=> {
            if( status === 'active'){
                ( Appearance.getColorScheme() === 'light')
                ? setLightTheme()
                : setDarkTheme()
            }
        })
    }, [])
    

    const setDarkTheme = () =>{
        dispatch({type: 'Dark Theme'})
        console.log('Dark')
    }

    const setLightTheme = () =>{
        dispatch({ type: 'Light Theme'})
    }

    return(
        <ThemeContext.Provider value={{
            theme,       
            setDarkTheme,
            setLightTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}