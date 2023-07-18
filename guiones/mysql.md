# Mysql

Especificaciones de las tablas.

## Equipos

- id int unsigned auto_increment.
- nombre varchar 50 not null.
- localidad varchar 40 not null
- socios tinyint

## Jugadores

- dni char 9 not null
- nombre varchar 30 not null.
- edad tinyint.
- salario decimal 8,2 not null.
- lesionado bit 1 default false.
- idequipo int unsigned not null.
- primary key dni.
- foreign key del id equipo con el id de la tabla equipos.

## Usuarios

## Roles
