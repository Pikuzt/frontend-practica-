//(function({
    var formulario = document.getElementById('formulario'),
        nombre = formulario.nombre,
        correo = formulario.correo,
        sexo = formulario.sexo,
        terminos = formulario.terminos,
        error = document.getElementById('error');

        function validarNombre(e){
           if (nombre.value == '' || nombre.value == null){
               console.log('Por favor Complete el nombre');
               error.style.display ='block';
               error.innerHTML += '<li> Por favor completa el nombre.</li>'
               e.preventDefault();
            }
        }

        function validarCorreo(e){
            if (correo.value == '' || correo.value == null){
                console.log('Por favor Complete el correo');
                error.style.display ='block';
                error.innerHTML += '<li> Por favor completa el correo.</li>'
                e.preventDefault();
             }
        }

        function validarSexo(e){
            if (sexo.value == ''|| sexo.value == null ){
                console.log('Por favor Complete el sexo');
                error.style.display ='block';
                error.innerHTML += '<li> Por favor completa el sexo.</li>'
                e.preventDefault();
            }else{
                error.style.display = 'none';
            }
        }

        function validarTerminos(){
            if (terminos.checked == false){
                console.log('Por favor acetar los terminos');
                error.style.display ='block';
                error.innerHTML += '<li> Por favor acetar los terminos.</li>'
                e.preventDefault();
            }else{
                error.style.display = 'none';
            }
        }
        
        function validarFormulario(e){
            error.innerHTML = '';
            validarNombre(e);
            validarCorreo(e);
            validarSexo(e);
            validarTerminos();
        }

        formulario.addEventListener('submit', validarFormulario);
//}()))