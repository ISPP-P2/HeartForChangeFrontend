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
    outline = false}) {
    return (
        <Box >
            <Button type={'button'} sx={{
                 width: widthButton,
                 height: heightButton,
                backgroundColor: variantButton + "!important",
                "&:hover": {
                    opacity: 0.85
                }
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