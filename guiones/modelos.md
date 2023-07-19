# Modelos

En la carpeta models metemos un archivo ts por cada tabla:

- equipos.ts
- jugadores.ts
- usuarios.ts
- roles.ts

## Notas

1. Hay que definir la interface. Deberá llamarse ModeloAttributes: por ejemplo, JugadoresAttributes. Si hay algún campo id autonumérico deberá llevar interrogante.
1. Luego va la función export const Modelo = db.define de tipo `<Model<NombreDeLaInterfaz>>`.
  1. Su primer parámetro es el nombre del modelo entre comillas.
  1. Su segundo parámetro es un objeto que contiene las propiedades de cada campo.
  1. Su último parámetro es un objeto en el que se establece el nombre de la tabla de la base de datos.
1. Las relaciones uno a muchos se hacen en el modelo del uno. Por ejemplo, como muchos usuarios tienen un rol la relación entre usuarios y roles se establece en el modelo del rol.

---

[Ir al índice](indice.md)