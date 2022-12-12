import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import Error from "./Error"
import useSelectMonedas from "../hooks/useSelectMonedas"

import { monedas } from "../data/monedas"


const InputSumbit = styled.input `
    background-color: #9497ff;
    border:none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-trasnform :uppercase;
    font-size: 20px;
    border-radius: 5px;
    margin-top: 30px;
    transition: background-color .3s ease ;

    &:hover {
        background-color: #7A7DFE ;
        cursor: pointer;
    }
`




const Formulario = ({setMonedas}) => {

    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)

    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda',monedas)
    const [cripto, SelectCripto] = useSelectMonedas('Elige tu Criptomoneda',criptos)

    useEffect(() => {
        const consultarApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
            const response = await fetch(url);
            const result = await response.json()


            const arrayCriptos = result.Data.map(cripto => {

                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto
            })
            setCriptos(arrayCriptos)
        }

        consultarApi()
    },[])

    const handleSumbit = (e) => {
        e.preventDefault();
        if([moneda, cripto].includes('')){
            setError(true)
            return
        }

        setError(false)
        setMonedas({
            moneda,
            cripto
        })
    }

    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}
            <form onSubmit={handleSumbit}>
                <SelectMonedas />
                <SelectCripto />
                
            
                <InputSumbit 
                    type="submit" 
                    value="Cotizar"
                />
            </form>
        </>
    )
}

export default Formulario
