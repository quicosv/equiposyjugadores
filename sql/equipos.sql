drop table if exists equipos;

-- Tabla de equipos
create table equipos (
	idequipo int unsigned not null auto_increment primary key,
	nombre varchar(50),
	localidad varchar(40),
	socios int unsigned
) ENGINE = INNODB;

show warnings;
