import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'



function CustomButton({
    variantButton = VARIANTES_BUTTON.GREEN,
    onClick, 
    text, 
    outline = false}) {

    return (
        <Box sx={{
            margin: "2px",

        }}>
            <Button sx={{
                margin: "1sw",
                backgroundColor: variantButton + "!important",
                "&:hover": {
                    opacity: 0.85
                }
            }}
            onClick={onClick} 
            variant="contained"
            >
                {text}
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
    PURPLE: "#ba81e7"
}