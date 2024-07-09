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
        x1_id.innerHTML = x1;
        let x2 = -numB_id.value - Math.sqrt(delta)/2*numA_id.value;
        x2_id.innerHTML = x2;
        }
    }else{
        alert('O delta é negativo');
    }
}
