

function verificarJanela(opened)
{
setTimeout(() => {
    if(opened==0){
        
        window.location.replace('../../index.html')
    }
}, 500);
    
    
}
function openWindow(janela){
    switch(janela){
        case 'home':
            window.location.assign('../../index.html')
            break
            case 'service':
                window.location.assign('../../Pages/Servicos/Servicos.html')
                break
                case 'curso':
                    window.location.assign('../../Pages/Cursos/cursos.html')

                    break
                    case 'galery':
                        window.location.assign('../../Pages/Galeria/Galeria.html')
                        break
                    case 'contact':
                        window.location.assign('../../Pages/Contactos/Contactos.html')
                        break
            
    }
}
