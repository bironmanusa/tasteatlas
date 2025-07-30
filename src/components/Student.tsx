import Typography from '@mui/material/Typography';

//PENDIENTE: Agregue los props apellidos, nombres y paralelo
interface Data {
    apellidos: string;
    nombres: string;
    paralelo: string;
}

export default function Student( data: Data ) {
    return (
        <>
            <Typography component="p" variant="h4">
                
                {/* PENDIENTE: Renderice los props apellidos y nombres */}
                {data.apellidos} {data.nombres}
            </Typography>
            <Typography component="h2" variant="h6"
                color="primary" gutterBottom>

                {/* PENDIENTE: Renderice el paralelo */}
                Paralelo # 2

            </Typography>
        </>
    )
}
