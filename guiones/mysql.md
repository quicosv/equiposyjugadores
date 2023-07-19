# Mysql

## Organización de los scripts

Hay que crear un archivo para la creación de la base de datos y uno por cada tabla que se vaya a crear.

### Archivo de la base de datos

1. Borrará la base de datos si existe.
1. Creará la base de datos.
1. Cambiará la codificación a utf-8.

### El archivo de cada tabla

1. Borrará la tabla si existe.
1. creará la tabla de acuerdo con su especificación.
1. Insertará datos en la tabla si procede.

## Especificaciones de las tablas.

### Equipos

- idequipo int unsigned auto_increment.
- nombre varchar 50 not null.
- localidad varchar 40 not null.
- socios int unsigned.
- primary key idequipo.

### Jugadores

- dni char 9 not null.
- nombre varchar 30 not null.
- edad tinyint unsigned.
- salario decimal 8,2 not null.
- lesionado bit 1 default 0.
- idequipo int unsigned not null.
- primary key dni.
- foreign key del id equipo con el id de la tabla equipos.

### Usuarios

- idusuario int unsigned not null.
- email varchar 75 not null.
- password varchar 1000 not null.
- token varchar 500 not null.
- roles_idrol int unsigned
- primary key idusuario.

### Roles

- idrol int unsigned not null.
- descripcion varchar 13.
- primary key idrol.

## Ejecución en consola

Asegúrate de hacer chcp 65001 en consola antes de entrar a mysql para que funcionen las vocales acentuadas y las eñes.

---

[Ir al índice](indice.md)