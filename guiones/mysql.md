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

## Especificaciones de las tablas

### Equipos

- idequipo int unsigned auto_increment primary key.
- nombre varchar 50 not null.
- localidad varchar 40 not null.
- socios int unsigned.

### Jugadores

- dni char 9 not null primary key.
- nombre varchar 30 not null.
- edad tinyint unsigned.
- salario decimal 8,2 not null.
- lesionado bit 1 default 0.
- idequipo int unsigned not null.
- foreign key del id equipo con el id de la tabla equipos.

### Usuarios y roles

Recuperar las instrucciones de creación e inserción de la base de datos de la agencia.

## A tener en cuenta

### Codificación

La instrucción que cambia la codificación de la base de datos a utf-8 es:

`ALTER DATABASE agencia CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`

### Recordatorio de relaciones

Después del último campo se pone una coma y luego va:

```mysql
foreign key (elCampoDeEstaTabla) references laOtraTabla(elCampoDeLaOtraTabla)
```

## Ejecución en consola

Asegúrate de hacer chcp 65001 en consola antes de entrar a mysql para que funcionen las vocales acentuadas y las eñes.

---

[Ir al índice](indice.md)
