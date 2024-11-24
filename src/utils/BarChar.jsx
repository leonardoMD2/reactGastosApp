import {  useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);






export default function BarChar() {
    const url = "https://api-godot.vercel.app/montos"

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => setData(res))
    },[])
    
    

   const sumaPorCategoria = data.reduce((acumulador, elemento) => {
        // Iterar sobre las claves del objeto actual
        for (const clave in elemento) {
            // Convertir el valor a número y sumar al acumulador correspondiente
            acumulador[clave] = (acumulador[clave] || 0) + Number(elemento[clave]);
        }
        return acumulador;
        }, {});

    let total = Object.values(sumaPorCategoria).reduce((acumulador, valor) => acumulador + valor, 0);

   

    let gastos = [sumaPorCategoria.supermercado, sumaPorCategoria.verduleria, sumaPorCategoria.otros, sumaPorCategoria.dietética, sumaPorCategoria.carniceria, sumaPorCategoria.panaderia]
    let tipo = ["Supermercado","Verduleria","Otros","Dietética","Carniceria","Panaderia"];
    
    let misoptions = {
        responsive : true,
        animation : true,
        plugins : {
            legend : {
                display : false
            }
        },
        scales : {
            
            x: {
                ticks: { color: "#F4EAE6"}
            }
        }
    };

    let midata = {
        labels: tipo,
        datasets: [
            {
                label: 'Gastos',
                data: gastos,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 205, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(153, 102, 255, 0.6)'],
                borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'],
                        borderWidth: 1
            }
            
        ]
    };

    return (
        <>
            <Bar data={midata} options={misoptions} />
            <h2>${total}</h2>
        </>
)
}