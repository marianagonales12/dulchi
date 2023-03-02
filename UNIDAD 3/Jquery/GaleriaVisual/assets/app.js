function linkgenerado() {
    //generar un numero aletorio
    let id = Math.round(Math.random() * 500);
    return `https://picsum.photos/id/${id}/info`;
}

function abc(data) {
    let div = $("<div> </div>");

    let img = $("<img> </img>");

    img.attr("src", data.download_url);

    div.append(img);

    let autor = $("<h3></h3>");
    autor.attr(data.author);

    div.append(autor);

    $('#imagenes-contenedor').append(div);
}




function getPic() {
    //consumir API

    $.ajax({
        type: 'GET',
        url: linkgenerado(),
        dataType: "json",
        async: true,
        success: function (data) {
            abc(data)
        },
    });
}


$(document).ready(function () {
    //Bucle que imprima en la consola un texto 9 veces con el bucle for
    for (let i = 0; i < 9; i++) {
        getPic();
    }
});
