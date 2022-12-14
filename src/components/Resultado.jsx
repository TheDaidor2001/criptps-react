import styled from "@emotion/styled"

const Container = styled.div `
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
    color: #fff;
    font-family: 'Lato', 'sans-serif'

`

const Texto = styled.p`
font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Precio = styled.p `
    font-size: 24px;
    span {
        font-weight: 700;
    }
`

const Imagen = styled.img `
    display: block;
    width: 120px;
`



const Resultado = ({resultado}) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Container>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen de ls criptomonedas"/>
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>El precio más alto del dia: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio más bajo del dia: <span>{LOWDAY}</span></Texto>
            <Texto>Variación en las últimas 24H: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Ultima actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Container>
  )
}

export default Resultado
