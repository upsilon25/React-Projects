import {createContext ,useReducer} from 'react'

export const ThemeContext = createContext()

const INTIALL = { darkmode:false };

const themeReducer = (state,action) =>{
    switch(action.type){
        case "TOGGLE":
            return {darkmode :!state.darkmode};
        default:
            return state;    
    }
};

export const ThemeProvider =(props) => {
    const [state, dispatch] = useReducer(themeReducer, INTIALL)

    return(
        <div>
            <ThemeContext.Provider value={{state,dispatch}}>
                {props.children}
            </ThemeContext.Provider>
        </div>
    )
};