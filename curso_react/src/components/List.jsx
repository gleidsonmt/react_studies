import Item from './Item'

export default function List() {
    return (
        <>
        <h1>Minha Lista</h1>
        <Item marca='Ferrari' ano_lancamento={1985}/>
        <Item marca='Fiat' ano_lancamento={1985}/>
        <Item marca='Renault'/>
        </>
    )
}