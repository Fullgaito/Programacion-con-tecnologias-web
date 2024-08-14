


function consumirAPI(){
    var sexo=[];
    var mujeres=0;
    var hombres=0;
    fetch("https://www.datos.gov.co/resource/6rvy-hipa.json")
    .then(datos=>datos.json()) //ecmascrippt
    .then(function (datos){
        datos.forEach(elemento => {
            if(elemento.sexo=="Mujeres"){
                mujeres=mujeres+1;
            }else{
                hombres=hombres+1;
            }
        });
        var trace1 = {
            type: 'bar',
            x: ["hombres","mujeres"],
            y: [hombres,mujeres],
            marker: {
                color: '#C8A2C8',
                line: {
                    width: 2.5
                }
            }
            };
            
    
            var data = [ trace1];

            var layout = { 
                title: ' Hombres y mujeres de la parte administrativa de la UNAL',
                font: {size: 10}
                };
            
            Plotly.newPlot('myDiv', data,layout);
    }

    );
    


}