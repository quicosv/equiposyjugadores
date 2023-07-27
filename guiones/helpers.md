# helpers

## dbValidators

El resumen de lo que hace cada función es:

1. Se hace la búsqueda en la base de datos.
1. Si no se encuentra lo que buscábamos se pone throw new Error y entre paréntesis el mensaje de error.

## generarJWT

Hay que comprobar que en el token se guarda lo que queremos. Esto se mira en los siguientes lugares:

- En los parámetros que recibe la función generarJWT que estamos creando.
- En el objeto que se asigna a la variable `payload`.

También hay que ajustar la duración del token en la propiedad `expiresIn`.

---

[Ir al índice](indice.md)
