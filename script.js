
function descargarArchivo() {
    const texto = "Pago realizado con éxito. Gracias por preferirnos."; 
    const blob = new Blob([texto], { type: "text/plain" }); 
    const link = document.createElement("a"); 
    link.href = URL.createObjectURL(blob); 
    link.download = "confirmacion_pago.txt"; 
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link); 
  }
  
  window.onload = function() {
    document.querySelector(".btn-descargar").addEventListener("click", descargarArchivo);
  };
  