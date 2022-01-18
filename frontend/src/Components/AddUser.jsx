import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: '',
    image: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})


const AddUser = () => {
        const [user, setUser] = useState(initialValue);
        const { name, username, email, phone, image } = user;
        const classes = useStyles();
        let history = useHistory();

        const onValueChange = (e) => {
            console.log(e.target.value);
            setUser({...user, [e.target.name]: e.target.value}) 
        }

        const addUserDeatils = async() => {
            await addUser(user);
            history.push('./all');
        }


    return(
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" required={true} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" required/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input type='email' onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" required />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" required />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Upload Image</InputLabel>
                <Input type='file' onChange={(e) => onValueChange(e)} name='image' className="image" value={image} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDeatils()} >Add User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;