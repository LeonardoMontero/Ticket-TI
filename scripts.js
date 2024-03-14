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

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("ticketForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        
        // Capturar os valores do formulário
        var title = document.getElementById("title").value;
        var category = document.getElementById("category").value;
        var description = document.getElementById("description").value;

        // Obter a hora atual
        var data = new Date();
        var hora = data.getHours();
        var minutos = data.getMinutes();
        var segundos = data.getSeconds();
        var horaFormatada = hora + ":" + minutos + ":" + segundos;

        // Montar o conteúdo do arquivo
        var conteudoArquivo = "Nome do colaborador: " + title + "\n";
        conteudoArquivo += "Categoria: " + category + "\n";
        conteudoArquivo += "Descrição: " + description + "\n";
        conteudoArquivo += "Hora do envio: " + horaFormatada;

        // Criar o objeto Blob com o conteúdo do arquivo
        var blob = new Blob([conteudoArquivo], { type: "text/plain" });

        // Criar um elemento <a> para fazer o download do arquivo
        var linkDownload = document.createElement("a");
        linkDownload.download = "ticket_" + horaFormatada + ".txt";
        linkDownload.href = URL.createObjectURL(blob);
        linkDownload.click();
    });
});
