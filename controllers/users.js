import { v4 as uuidv4 } from 'uuid';


let userr = [];
export const getuser = (req,res)=>{
    console.log(userr);
    res.send(userr);
}

export const createUser = (req,res)=>{
    console.log("post triggered");

    // console.log(req.body);
    const daaata = req.body;

    const userWithId = {...daaata, id:uuidv4()}
    userr.push(userWithId);
    
    res.send(`users with the name ${daaata.firstname} is added to database`);
}

export const getUsers = (req,res)=>
{
    // console.log(req.params);

    const { id } = req.params;

    const foundUser = userr.find((daaata)=> daaata.id === id);

    res.send(foundUser);
}

export const patchUsers = (req,res)=>
{
    const { id } = req.params;
    const daaata = userr.find((daaata)=> daaata.id===id );
    const {firstname, lastname, age} = req.body;

    if(firstname){
        daaata.firstname = firstname;
    }

    if(lastname){
        daaata.lastname = lastname;
    }

    if(age){
        daaata.age = age;
    }

    res.send(`user with id ${id} is updated`);
}

export const deleteUsers = (req,res)=> {
    const { id } = req.params;

    userr = userr.filter((daaata)=>daaata.id !== id);
    res.send(`the user with the id ${id} is deleted`);
}