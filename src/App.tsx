import './App.css'

import Grid from '@mui/material/Grid2' 
import DishTable from './components/DishTable'
import Student from './components/Student'

// PENDIENTE: Cree la interfaz
import { type Dish } from './interface/Dish'
import { useState, useEffect } from 'react'


function App() {

  let url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json"
  
  // PENDIENTE: Variable de estado y la función de modificación. 
  const [dishes, setDishes] = useState<Dish[]>([])


  // PENDIENTE: 
  // Realizar una petición asíncrona a la URL. La respuesta es un JSON. 
  // Al recibir la respuesta, actualice la variable de estado.
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data: Dish[]) => setDishes(data))
      .catch(err => console.error(err))
  }, [url])
  


  return (
    <Grid container spacing={5}>

        {/* Student */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe sus datos (apellidos, nombres y paralelo) como props del componente */}
          <Student apellidos="Mayorga Navarro" nombres="Mateo Sebastian" paralelo="2"></Student>

        </Grid>
        
        {/* DishTable */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe la variable de estado como prop */}
          <DishTable data={dishes}></DishTable>
        
        </Grid>
        
       
    </Grid>
  )
}

export default App
