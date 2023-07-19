drop table if exists jugadores;

-- Tabla jugadores
create table jugadores (
		dni char(9) not null primary key,
	nombre varchar(30) not null,
		edad tinyint unsigned,
	salario decimal(8, 2),
	lesionado bit(1) default 0,
		idequipo int unsigned,
	foreign key (idequipo) references equipos(idequipo)
);
