# Mysql

Especificaciones de las tablas.

## Equipos

- idequipo int unsigned auto_increment.
- nombre varchar 50 not null.
- localidad varchar 40 not null.
- socios int unsigned.
- primary key idequipo.

## Jugadores

- dni char 9 not null.
- nombre varchar 30 not null.
- edad tinyint unsigned.
- salario decimal 8,2 not null.
- lesionado bit 1 default 0.
- idequipo int unsigned not null.
- primary key dni.
- foreign key del id equipo con el id de la tabla equipos.

## Usuarios

- idusuario int unsigned not null.
- email varchar 75 not null.
- password varchar 1000 not null.
- token varchar 500 not null.
- roles_idrol int unsigned
- primary key idusuario.

## Roles

- idrol int unsigned not null.
- descripcion varchar 13.
- primary key idrol.