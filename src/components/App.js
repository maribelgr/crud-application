import React from 'react';
import  { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios'; 
import {makeStyles} from '@material-ui/core/styles';
import {Table, TableHead, TableCell, TableBody, TableRow, TableContainer, Modal, Button, TextField, StylesProvider} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';

const baseUrl = 'http://hello-world.innocv.com/api/user/'

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400, 
    padding: '3%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  icons: {
    cursor: 'pointer'
  },
  inputMaterial: {
    width: '100%'
  }
}))

function App() {

  const styles = useStyles();

  const [data, setData] = useState([]);

  const [createModal, setCreateModal] = useState(false);

  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const handleChange = (e) => {
    setName(e.currentTarget.value)
    console.log(name);
  }

  const handleChange2 = (e) => {
    setBirthdate(e.currentTarget.value)
    console.log(birthdate);

  }


  const getRequest = async () => {
    await axios.get(baseUrl)
    .then(response => {
      setData(response.data);
    })
  } 

const postRequest = (name, birthdate) => {
    return fetch(`https://hello-world.innocv.com/api/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, birthdate}),
    })
      .then((response) => response.json())
      .then((data) => data);
  };


  const openCloseCreateModal = () => {
    setCreateModal(!createModal);
  }

  useEffect(async() => {
    await getRequest()
  },[])

  const createBody = (
    <div className={styles.modal}>
      <h3>Crear Nuevo Usuario</h3>
      <TextField className={styles.inputMaterial} label="Nombre" onChange={handleChange} />
      <br/>
      <TextField className={styles.inputMaterial} label="Fecha de Nacimiento" onChange={handleChange2} />
      <br/><br/>
      <div align="right">
        <Button color="primary" onClick={postRequest} >Añadir</Button>
        <Button onClick={openCloseCreateModal}>Cancelar</Button>

      </div>

    </div>
  )

  return (
    <div className="App">
      <br/>
      <Button onClick={openCloseCreateModal}>Crear nuevo usuario</Button>
      <br/><br/>
         <TableContainer>
       <Table>
         <TableHead>
           <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Fecha de nacimiento</TableCell>
            <TableCell>Opciones</TableCell>
            </TableRow>
         </TableHead>

         <TableBody>
           {data.map(user=>(
             <TableRow key={user.id}>
               <TableCell>{user.name}</TableCell>
               <TableCell>{user.birthdate}</TableCell>
               <TableCell>
                 <Edit/>
                 &nbsp;&nbsp;&nbsp;
                 <Delete/>
               </TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>

     <Modal
     open = {createModal} 
     onClose = {openCloseCreateModal}>
       {createBody}   
    </Modal>     
    </div>
  );
}

export default App;
