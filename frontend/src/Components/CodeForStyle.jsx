import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    }
})

const CodeForStyle = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant="h4">MERN Stack Test @Scriptics</Typography>
            <Box style={{display: 'flex'}}>
            </Box>
        </Box>
    )
}

export default CodeForStyle;