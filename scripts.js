<script>
  // Detectar clique em qualquer caixa de seleção
  document.querySelectorAll('.aula-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const diaSelecionado = checkbox.getAttribute('data-dia');
      const aulaInput = document.getElementById('aulaSelecionada');

      if (checkbox.checked) {
        aulaInput.value = diaSelecionado; // Marca o dia no campo
      } else {
        aulaInput.value = ''; // Limpa caso desmarque
      }
    });
  });

  // Enviar formulário
  function enviarFormulario(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const nascimento = document.getElementById('dataNascimento').value;
    const experiencia = document.getElementById('experiencia').value;
    const aula = document.getElementById('aulaSelecionada').value;

    if (!aula) {
      alert('Por favor, selecione um dia de aula.');
      return false;
    }

    alert(`Inscrição enviada com sucesso!\n\nNome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nNascimento: ${nascimento}\nExperiência: ${experiencia}\nAula: ${aula}`);
    document.getElementById("form-inscricao").reset();
    document.getElementById("aulaSelecionada").value = '';
    return false;
  }
</script>
