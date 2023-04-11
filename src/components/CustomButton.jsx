import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'



function CustomButton({
    variantButton = VARIANTES_BUTTON.GREEN,
    onClick, 
    iconD,
    type = 'button', 
    text, 
    widthButton = "100%",
    heightButton = "100%",
    outline = false,
    show = true,
    height="auto",
    }) {

    return (
        <Box  sx={{display: "flex", justifyContent:"center", alignItems:"center"}}> 
            <Button type={'button'} 
            sx={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                width: widthButton,
                height: heightButton,
                minWidth: "0",
                minHeight: "0",
                backgroundColor: variantButton + "!important",
                "&:hover": {
                    opacity: 0.85
                },
                display: show ? 'flex':'none',
            }}
            onClick={onClick} 
            variant="contained"
            >
                {text}
                {iconD}
            </Button>
        </Box>
        
    )
}

export default CustomButton


export const VARIANTES_BUTTON = {
    LIGHTGREEN: "#88d699",
    GREEN: "#279574",
    DARKGREEN: "DARKGREEN",
    RED: "#da5240",
    LIGHTBLUE: "#88b0d6",
    BLUE: "#495bfc",
    PURPLE: "#ba81e7",
    ORANGE: "#ff862f",
    GREEN2: "#04AA6D"


}