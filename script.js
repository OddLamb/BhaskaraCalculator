function Bhaskara(){   
    var numA_id = document.getElementById('numA');
    var numB_id = document.getElementById('numB');
    var numC_id = document.getElementById('numC');
    
    var delta_id = document.getElementById('delta');
    var x1_id = document.getElementById('x1');
    var x2_id = document.getElementById('x2');

    let delta = numB_id.value**2-4*numA_id.value*numC_id.value;
    
    if(Math.sqrt(delta)){
        delta_id.innerHTML = delta;

        let x1 = -numB_id.value + Math.sqrt(delta)/2*numA_id.value;
        if(Math.floor(x1) == x1){
            x1_id.innerHTML = x1;
        }else{
            var x1_frac = decToFrac(x1);
            var fracDen = x1_frac[1]
            var fracNum = x1_frac[0]
            x1_id.innerHTML = fracNum + "/" + fracDen;
        }

        let x2= -numB_id.value - Math.sqrt(delta)/2*numA_id.value;
        if(Math.floor(x2) == x2){
            x2_id.innerHTML = x2;
        }else{
            var x2_frac = decToFrac(x2);
            var fracDen = x2_frac[1]
            var fracNum = x2_frac[0]
            x2_id.innerHTML = fracNum + "/" + fracDen;
        }
    }else{
        alert('O delta é negativo');
    }
}
decToFrac = dec =>
    [...Array(1000).keys()].flatMap(
      i => [...Array(1000).keys()].map(
        j => [
          i + 1, j + 1, (i + 1) / (j + 1),
          Math.abs(((i + 1) / (j + 1)) - dec)
        ]
      )
    ).sort((a, b) => a[3] - b[3])[0].slice(0, 2)