export default function Pessoa({ name, age, role, avatar }) {
    return (
        <>
        <img src={avatar} alt="My Picture" />
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        <p>Profissao: {role}</p>
        </>
    )
}