import Button from './Botton'
const Header = (props) =>{ 
return (
    <header>
    <h1> Encabezado{props.title} </h1>
    <h1 style={{color:'red', backgroundColor:'black'}}>
     Encabezado </h1>
     <h1 style={headingStyle}>Encabezado </h1>
    </header>
     )
    }
    Header.defaultProps={
        title: 'Titulo por defecto'
    }
    
    const headingStyle={
    color:'red',
    backgraundColor: 'black'
    }

    export default Header;