$.getJSON('json/estados-cidades.json', function (data) {
    var itens = '<option name="">Selecione um estado</option>';

    $.each(data.estados, function (key, val) {
        itens = itens + '<option value="' + val.sigla + '">' + val.nome + '</option>';
    });

    $('#estado').html(itens);
    $('#estado').change(function (event) {
        var estado = data.estados.filter(function (estado) {
            return estado.sigla === event.target.value;
        });

        nomeCidades((estado[0] || {cidades: []}).cidades);
    }).change();
});

function nomeCidades(cidades) {
    var itens = '<option name="">Selecione uma cidade</option>';

    $.each(cidades, function (key, val) {
        itens = itens + '<option value="' + key + '">' + val + '</option>';
    });
    $('#cidade').html(itens);
}