backbone-tutorials-and-lessons-with-require
===========================================

Backbone with RequireJS Lesson #1: Hello World

-This one is complete Hello World example with Model, View and Template (check scripts folder).
-On the bottom of index.html is instruction to load main script file at scripts/main.js with dependencies and app initialization.
-On load, an instance of modelHello will be created, with "message" argument passed.
-After that, instance of modelView is created, with "el" parameter (DOM element from index.html inside which our app will run) and "model" with instance of modelHello previously created.
-In chained method we are calling render() method inside our view that loads template and passes info from model.

------------------------------------------------------------------------------------------------------------------------
