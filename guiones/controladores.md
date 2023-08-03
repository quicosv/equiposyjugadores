# Controllers

## Importación de express

Hay que copiar a mano la importación de request y response, porque visual studio code no la autoimporta. La línea 1 de cada controller debe ser la siguiente:

`import { Request, Response } from 'express';`

## Objetivos de las funciones a desarrollar

Se hacen las operaciones CRUD (consultar, insertar, actualizar y eliminar).

## Funciones de los modelos

- findByPk para buscar por clave primaria.
- findAll para encontrar todos los registros.
- findOne para buscar un único resultado.
- create para generar los datos que se quieren guardar.
- update para actualizar los datos.
- destroy para borrar registros.

## Condiciones

Dentro de las funciones que usamos para encontrar registros se puede poner entre llaves la palabra where, dos puntos y un objeto con las condiciones.

Una de las opciones es Op, que es un conjunto de opciones de sequelize que incluye cosas como between o like. Supongamos que queremos hacer un between entre min y max. Sería:

`[Op.between]: [parseFloat(min), parseFloat(max)]`

En lugar de borrar o actualizar una factura previamente encontrada, podemos remitirnos directamente al modelo y restringir las condiciones con un where.

## inner join

En la misma función que usemos para encontrar registros, entre las llaves se pone include, dos puntos y un array que contendrá un objeto con:

- una propiedad model con el modelo con el que queremos hacer la relación.
- as y el nombre que le vamos a dar entre comillas.
- La propiedad required a true.

## authController

Si necesitamos actualizar alguna propiedad cuando se hace login en el objeto del update sólo se pasa lo que cambia.

---

[Ir al índice](indice.md)
