document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obter valores do formulário
    var title = document.getElementById('title').value;
    var category = document.getElementById('category').value;
    var description = document.getElementById('description').value;
    
    // Obter a data e hora atual
    var now = new Date();
    var formattedDate = now.toLocaleString();

    // Criar nova linha na tabela para o ticket aberto
    var table = document.getElementById('ticketTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    newRow.innerHTML = '<td>' + formattedDate + '</td><td>' + title + '</td><td>' + category + '</td><td>' + description + '</td>';
    
    // Limpar o formulário após a submissão
    document.getElementById('ticketForm').reset();
});

