const buscaCnpj = () => {
    cnpj = document.getElementById('cnpj').value
    const settings = {
        "dataType": "jsonp",
        "url": "https://receitaws.com.br/v1/cnpj/" + cnpj,
        "type": "GET"
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        document.getElementById('nome_empresa').innerHTML = response.nome + '; <b>CNPJ:</b> ' + response.cnpj 
                                + '; <b>situada na</b> ' + response.logradouro + ', Nº ' + response.numero
                                + ', ' + response.complemento + ', ' + response.bairro + ', ' + response.municipio + ' - ' + response.uf
                                + '; <b>Representada pelo(a) Sr(a):</b> XXXXXXXXXXXXXXXXX; <b>CPF:</b> XXXXXXXXXXXX';
        document.getElementById('nome_empresa1').innerHTML = response.nome + '; <b>CNPJ:</b> ' + response.cnpj 
                                + '; <b>situada na</b> ' + response.logradouro + ', Nº ' + response.numero
                                + ', ' + response.complemento + ', ' + response.bairro + ', ' + response.municipio + ' - ' + response.uf
                                + '; <b>Representada por instrumento de procuração pelo(a) Sr(a):</b> XXXXXXXXXXXXXXXXX; <b>CPF:</b> XXXXXXXXXXXX';
      });
}

const calculaData = () => {
  if(!$('#data_ini').val()) {
    alert('Necessário Informar a Data!');
    return false;
  }
  m = moment($('#data_ini').val(), 'YYYY-MM-DD');
  m.add($('#dias').val(), 'days');
  $('#resultadoData').html(m.format('DD/MM/YYYY'));
  //alert(m.format('DD/MM/YYYY'));
}

const numeroExtenso = () => {
  if(!$('#numero').val()) {
    alert('Necessário Informar Número!');
    return false;
  }
  $('#resultadoNumero').html($('#numero').val().extenso(true));
}

document.querySelector('#busca').addEventListener('click', buscaCnpj);
document.querySelector('#calcula').addEventListener('click', calculaData);
document.querySelector('#praExtenso').addEventListener('click', numeroExtenso);
document.querySelector('#cnpj').addEventListener('keypress', function (e) {
  if(e.key === 'Enter') {
    buscaCnpj();
  }
  
});

