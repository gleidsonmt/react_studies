import Button from "./Button";

export default function Evento({ numero }) {
  function meuEvento() {
    console.log(`Opa, fui ativado! ${numero}`);
  }

  function segundoEvento() {
    console.log("ativando o segundo evento");
  }

  return (
    <div>
      <p>Clique para disparar um evento"</p>
      <Button text="Primeiro Evento" event={meuEvento} />
      <Button text="Segundo Evento" event={segundoEvento} />
    </div>
  );
}
