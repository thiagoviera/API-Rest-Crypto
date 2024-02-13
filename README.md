# Respuestas

### ¿Qué es SQL Injection y cómo puede evitarse?
SQL Injection es un tipo de ataque informático en el que un atacante inserta código malicioso en una consulta SQL para alterar el comportamiento de la base de datos. Para prevenir SQL Injection, es fundamental validar y sanear cuidadosamente el input de usuario antes de incorporarlo en consultas SQL. Esto puede lograrse mediante la implementación de declaraciones preparadas y el uso de parámetros en las consultas, lo que evita la interpretación maliciosa del input de usuario como parte del código SQL.

Además, el uso de ORMs como Sequelize proporciona capas de abstracción que reducen la necesidad de escribir consultas SQL manualmente, lo que puede ayudar a prevenir errores de inyección accidental. También es importante mantener el sistema actualizado con parches de seguridad y utilizar prácticas recomendadas de gestión de contraseñas y encriptación para proteger la información sensible almacenada en la base de datos.

Al combinar estas medidas preventivas, se puede fortalecer significativamente la seguridad de una aplicación web contra ataques de SQL Injection.

### ¿Cuándo es conveniente utilizar SQL Transactions? Dar un ejemplo.

Las transacciones SQL son convenientes cuando se necesita mantener la integridad de los datos al realizar multiples consultas o operaciones relacionadas entre si. Por ejemplo, en un sistema de gestión de inventario, si se necesita agregar un nuevo producto y actualizar el nivel de existencias en la base de datos al mismo tiempo, es importante que ambas operaciones se realicen correctamente o ninguna de ellas se realice, de lo contrario quedaria solo una parte del archivo procesado, lo cual no es suficiente y complica otros procesos en paralelo.

### Describí brevemente las ventajas del patrón controller/service/repository
El patrón Controller-Service-Repository es un patrón de diseño que permite separar la lógica de negocio (Service) de la lógica presentacional (Controller) y la lógica de acceso a la base de datos (Repository).

Para poder trabajar con mayor eficencia dentro de un proyecto es importante la separacion de responsabilidades junto a una claridad en la estructura de la aplicacion, a traves del patron podemos lograr esto, permitiendo que la gestion del mismo sea mas facil de mantener y pueda facilitar el desarrollo en equipo.

### ¿Cuál es la mejor forma de guardar un campo de tipo enum en la DB?

Las bases de datos modernas pueden soportar el tipo de dato enum, es aconsejable trabajar con ellas como PostgreSQL. En cambio si trabajamos en un proyecto viejo y la base de datos que se utiliza no admite el tipo de dato enum podemos optar por una alternativa como almacenar valores enteros definiendo previamente una lista de valores permitidos, ejemplo: Admin = 1, Usuario = 2, Invitado = 3. 

### Usando async/await: ¿cómo se puede aprovechar el paralelismo?

En JavaScript, el uso de async/await facilita el aprovechamiento del paralelismo. La palabra clave await permite la ejecución síncrona de funciones asíncronas, lo que mejora la legibilidad y el control del flujo de ejecución. Una manera de aprovechar esto es ejecutando múltiples tareas en paralelo, usando Promise.all() por ejemplo, lo que permite esperar a que todas las promesas se resuelvan antes de continuar.