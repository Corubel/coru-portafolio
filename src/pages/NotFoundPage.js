import React from "react";

import "../estilos/notfound.css";

function NotFoundPage() {
  return (
    <div className="divNotFound">
      <h1>404 - Página no encontrada</h1>
      <p>Lo siento, la página que buscas no existe. O se rompio...</p>
      <a href="/">Volver a la página principal</a>
    </div>
  );
}

export default NotFoundPage;
