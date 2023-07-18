# Enunciado

Desarrollar un backend Node para dar soporte a operaciones CRUD para el mantenimiento de una base de datos MySQL que almacenará equipos y jugadores.

## PARTE 1

- Crear la tabla de equipos de acuerdo con la siguiente especificación:
  - Identificador
  - Nombre del equipo (obligatorio)
  - Localidad (obligatorio)
  - Número de socios (obligatorio)
- Crear la tabla de jugadores de acuerdo con la siguiente especificación:
  - DNI
  - Nombre (obligatorio)
  - Edad (obligatorio)
  - Salario (obligatorio)
  - Lesionado (boolean), valor por defecto false
  - Equipo al que pertenece (obligatorio)

## PARTE 2

Desarrollar un controller para equipos con las peticiones necesarias para:

- Agregar un equipo. Validar en la ruta que vienen todos los campos y que el equipo no exista previamente.
- Modificar un equipo. Validar en la ruta que vienen todos los campos y que el equipo no exista previamente.
- Eliminar un equipo. Validar que el id del equipo corresponda con uno que ya exista.
- Ver todos los equipos.
- Ver todos los equipos de una localidad. Validar que en la consulta venga una localidad.
- Ver todos los equipos con unos socios mayores que un número determinado. Validar que en la consulta venga un número entero no negativo.
- Ver todos los equipos cuyo nombre contenga un determinado texto. Validar que en la consulta venga un texto.

## PARTE 3

Desarrollar un controller para jugadores con las peticiones necesarias para:

- Agregar un jugador. Validar que vienen todos los campos y que el DNI del jugador no exista previamente.
- Modificar un jugador. No se modificará el campo DNI.
- Eliminar un jugador. Validar que el jugador corresponda con uno que ya exista.
- Ver todos los jugadores de un equipo.
- Ver todos los jugadores con una edad superior a un número determinado. Validar que en la consulta venga un número entero no negativo.
- Ver todos los jugadores con el equipo al que pertenecen.

## PARTE 4

Desarrollar un controller para usuarios con las peticiones necesarias para:

- Agregar un usuario. Al dar de alta los usuarios, se encriptará la contraseña con un hash de una única vía.
- Eliminar un usuario. Validar que el email del usuario corresponda con uno que ya exista.
- Ver todos los usuarios.

## PARTE 5

Desarrollar autenticación en nuestro servidor basada en la colección de usuarios.

Desarrollar un controlador que gestione una petición post para iniciar sesión. El inicio exitoso devolverá un token que habrá que adjuntar a las peticiones.

Proteger los siguientes accesos (obligar a que las peticiones a estos accesos lleven un token en la cabecera):

- Todos los accesos a usuarios.
- Agregar, modificar y eliminar equipos.
- Agregar, modificar y eliminar jugadores.
