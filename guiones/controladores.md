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

## inner join

En la misma función que usemos para encontrar registros, entre las llaves se pone include, dos puntos y un array que contendrá un objeto con:

- una propiedad model con el modelo con el que queremos hacer la relación.
- as y el nombre que le vamos a dar entre comillas.
- La propiedad required a true.

---

[Ir al índice](indice.md)
