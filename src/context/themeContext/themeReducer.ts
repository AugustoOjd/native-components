import { Theme } from "@react-navigation/native"


type ThemeAction = 
    | {type: 'Light Theme'}
    | {type: 'Dark Theme'}

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    dividerColor: string
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    colors: {
        primary: '#81b0ff',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'orange',
        notification: 'teal',
    },
    dividerColor: 'rgba( 0,0,0, 0.7)'
}

export const darktTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    colors: {
        primary: '#81b0ff',
        background: 'black',
        card: 'black',
        text: 'white',
        border: 'orange',
        notification: 'teal',
    },
    dividerColor: 'rgba( 0,0,0, 0.7)'
}

export const themeReducer = (state: ThemeState, action: ThemeAction):ThemeState =>{

switch (action.type) {
    case 'Light Theme':
        
        return { ...lightTheme}

    case 'Dark Theme':

        return {...darktTheme}

    default:
        return state;
}

}