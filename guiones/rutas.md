# Rutas

## Definición del enrutador

Hay que definir primero el nombre del enrutador con `export const nombre = Router();`.

## Creación de las rutas

La ruta se crea con `nombreEnrutador.verbo()`. Los parámetros que van entro los paréntesis son:

1. La ruta entre comillas.
1. Si procede, un array con los middlewares por los que queremos que pase. Pueden ser de express-validator o pueden estar definidos en helpers.
1. El nombre de la función que se ejecutará, que estará definida en el controller correspondiente.

## Notas sobre las rutas

- Aquí la dirección será relativa porque nos habrá redirigido el index.
- Si queremos que el usuario pase el contenido de una variable en la ruta ponemos `:variable`.

## Notas de los middlewares

1. Usar check si viene en el body de la petición y param si viene en la ruta.
1. Usar el método withMessage para lanzar el error.
1. Si procede proteger las rutas con token hay que poner el validarJWT antes de los checks para que compruebe primero si viene o no el token.

---

[Ir al índice](indice.md)
