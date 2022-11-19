$(document).ready(function(){
    isDocumentReady = true;
});

    $("#enviar").click(() => {
        $(".result").empty();
        var br1 = document.createElement("BR");
        var br2 = document.createElement("BR");
        var result = document.getElementsByClassName("result")[0];
        var campo1 = document.getElementsByClassName("campo")[0];
        var campo2 = document.getElementsByClassName("campo")[1];
        var campo3 = document.getElementsByClassName("campo")[2];

        result.prepend(`${campo3.value}`);
        result.prepend(br1);
        result.prepend(`${campo2.value}`);
        result.prepend(br2);
        result.prepend(`${campo1.value}`);
    });

    $("#borrar").click(()=> {
        $(".result").empty();
    });

    $("#randomizar").click(()=> {
        $(".result").empty();
        var list=['Hábil ','Guitarra ','Presencia ','Diferir ','Parpadeo ','Ladrón ','Tomar ','Trastornado ','Reunirse ','Manipulador ','Aviador ','Divino ','Descuidado ','Éxito ','Interesante ','Fértil ','Gastar ','Rango ','Audacia ','Más','enojado ','Hábil ','Metro ','Pulso ','Ventoso ','Parecer ','Hilarante ','Neón ','Suave ','Atracción ','Fraudulento ','Evocar ','Glándula ','Daydreamer ','Tender ','Mordaza ','Comprar ','Enamorado ','Indescriptible ','Marrón ','Hipopótamo','Capturado ','Boquiabierto ','Problema ','Humildad ','Gusano ','Bíblica ','Profundamente ','Arándano ','Lustre ','Región ','Santificado ','Construir ','Cepillo','de','dientes ','Trabajar ','Ramita ','Techo ','Injusticia ','Funeral ','Llamativo ','Observador ','Pensión ','Ciclo ','Marrón ','Profundidad ','Forlese ','Chocar ','Risa ','Líquido ','Red ','Vacilante ','Azul ','Divinidad ','Botón ','Rezar ','Caramelo ','Bonus ','Medición ','Fóbico ','Ingerir ','Chocar','Pobre','Consen','Tecnología','Probado','Salto','Trébol','Fusionar','Cualquiera','Volar','Pelotas','Fe','Amenaza','Ganado','Glándula','Caballos','Preservar','Respuesta','Variado','Esparcir','Burro','Fracaso','Adopción','Colisionador','Flutter','Bendición','Domesticado','Cancerígeno','Metálico','Aguas','profundas','Triángulo','Bigote','Abusivo','Hangar','Ritmo','Vasto','Cuidar','Publicidad','Estrategia','Sorber','Ballena'];
        var br1 = document.createElement("BR");
        var br2 = document.createElement("BR");
        const random1 = list[Math.floor(Math.random()*list.length)];
        const random2 = list[Math.floor(Math.random()*list.length)];
        const random3 = list[Math.floor(Math.random()*list.length)];
        var result = document.getElementsByClassName("result")[0];

        result.prepend(random1);
        result.prepend(br1);
        result.prepend(random2);
        result.prepend(br2)
        result.prepend(random3);
    });