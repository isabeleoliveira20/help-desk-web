document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("lista-chamados");

  if (!tabela) return;

  const chamados = JSON.parse(localStorage.getItem("chamados")) || [];

  if (chamados.length === 0) {
    tabela.innerHTML = `
      <tr>
        <td colspan="5">Nenhum chamado registrado.</td>
      </tr>
    `;
    return;
  }

  chamados.forEach((chamado) => {
    const linha = document.createElement("tr");

    linha.innerHTML = `
      <td>${chamado.titulo}</td>
      <td>${chamado.categoria}</td>
      <td>${chamado.prioridade}</td>
      <td>${chamado.status}</td>
      <td>${chamado.data}</td>
    `;

    tabela.appendChild(linha);
  });
});
