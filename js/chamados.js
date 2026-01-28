console.log("chamados.js carregado");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-chamado");

  if (!form) {
    console.error("Formulário não encontrado");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const chamados = JSON.parse(localStorage.getItem("chamados")) || [];

    const chamado = {
      titulo: document.getElementById("titulo").value,
      categoria: document.getElementById("categoria").value,
      prioridade: document.getElementById("prioridade").value,
      descricao: document.getElementById("descricao").value,
      status: "Aberto",
      data: new Date().toLocaleDateString()
    };

    chamados.push(chamado);
    localStorage.setItem("chamados", JSON.stringify(chamados));

    alert("Chamado salvo com sucesso!");
    form.reset();
  });
});
