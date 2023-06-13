
function gerarPdf(){

    const conteudo = document.querySelector('.seuTexto').value;
    //Opções para o Doc
    const options ={ 
        margin: [10,10,10,10],
        filename: "arquivo.pdf",
        html2canvas : {scale:3 , width:750},
        jsPDF: {unit: "mm", format:"a4", orientation : "portrait"}
    }



    // Criar e Baixar PDF
    html2pdf().set(options).from(conteudo).save();
}