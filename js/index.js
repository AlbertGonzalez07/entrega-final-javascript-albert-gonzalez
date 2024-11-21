

//simulador de prestamo

function gen_table(){
    document.getElementById("tabPersonal").innerHTML="";
    let montoPrestamo=Number(document.getElementById("capital").value);
    let cuotaPrestamo=Number(document.getElementById("couta").value);
    let interesPrestamo=Number(document.getElementById("interes").value);;
    if(montoPrestamo>0){   
        for(i=1;i<=cuotaPrestamo;i++){
            capital=montoPrestamo/cuotaPrestamo;
            d1=capital.toFixed(2);
            interes=((montoPrestamo*interesPrestamo)/100)/cuotaPrestamo;
            d2=interes.toFixed(2);
            importe=capital+interes;
            d3=importe.toFixed(2);
            document.getElementById("tabPersonal").innerHTML=document.getElementById("tabPersonal").innerHTML+
                    `<tr>
                        <td> ${i}</td>
                        <td> ${d1}</td>
                        <td> ${d2}</td>
                        <td> ${d3}</td>
                    </tr>`;
        }
        capitalInicial=montoPrestamo.toFixed(2);
        t_i=interes*cuotaPrestamo;
        interesTotal=t_i.toFixed(2);
        t_p=importe*cuotaPrestamo;
        totalInicialCuota=t_p.toFixed(2);
        document.getElementById("t1").innerHTML=capitalInicial;
        document.getElementById("t2").innerHTML=interesTotal;
        document.getElementById("t3").innerHTML=totalInicialCuota; 

     
        

    }else{
        const botonSweet = document.getElementById('boton-sweet');
  
        botonSweet.addEventListener('click', () => {
          swal.fire ({
              title: 'Ingrese valores completo!',
              text: 'Por favor, completar casillas para simular su prestamo.',
              icon: 'warning',
              confirmButtonText: 'Aceptar'
          })
        })
          
    }  
    
    }

const botonaceptar = document.getElementById('boton-aceptar');

  botonaceptar.addEventListener('click', () => {
    swal.fire({
        position: "top-end",
        icon: "success",
        title: "Gracias Maxi, Nahuel y los tutores por la enseñanza en este curso, ame mi curso por ustedes y su dedicacion",
        showConfirmButton: false,
        timer: 8000
      });
  })



