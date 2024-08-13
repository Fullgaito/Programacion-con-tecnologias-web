


function consumirAPI(){
    var sexo=[];
    var mujeres=0;
    var hombres=0;
    fetch("https://www.datos.gov.co/resource/6rvy-hipa.json")
    .then(datos=>datos.json()) //ecmascrippt
    .then(function (datos){
        datos.forEach(element => {
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
            title: 'Responsive to window\'s size!',
            font: {size: 18}
            };
    
            var config = {responsive: true}
    
            Plotly.newPlot('myDiv', data, layout, config );
    }

    );
    


}