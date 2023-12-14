export default function goToLink() {
  const cardLink = document.querySelectorAll(".card-servicos");

  function handleClick(event) {
    const servico = event.currentTarget.dataset.servico;
    const mensagem = encodeURIComponent(
      `Olá, gostaria de fazer um orçamento de ${servico}.`
    );
    const urlWhatsApp = `https://wa.me//5513991519647?text=${mensagem}`;
    window.open(urlWhatsApp);
  }

  cardLink.forEach((card) => {
    card.addEventListener("click", handleClick);
  });
}
