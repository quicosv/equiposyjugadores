-- Borramos la base de datos si existe
drop database if exists juezdeportivo;

-- Creamos la base de datos
create database juezdeportivo;

-- Modificamos la codificación de la base de datos a UTF8
ALTER DATABASE juezdeportivo CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


-- Nos cambiamos a esa base de datos
use juezdeportivo;

