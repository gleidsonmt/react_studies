export default function Pessoa(props) {
    return (
        <>
        <img src="props.foto" alt={props.name} />
        <h2>Nome: {props.name}</h2>
        <p>Idade: {props.age}</p>
        <p>Profissao: {props.role}</p>
        </>
    )
}