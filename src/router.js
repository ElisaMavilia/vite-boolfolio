import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import ProjectList from "./pages/ProjectList.vue";
import ProjectCard from "./pages/ProjectCard.vue";
import ContactComponent from "./pages/ContactComponent.vue";

const router = createRouter({
    history: createWebHistory(), /* crea una history per la web: tiene in memoria tutte le rotte che sono state raggiunte con il browser */
    routes: [ /* array di oggetti in cui ogni oggetto è una rotta */
      {
        path: "/", /* path indica il percorso url */
        name: "home", /* nome della rotta */
        component: AppHome, /* su laravel corrisponde al controller: si tratta del componente che gestisce la rotta */
      },
      {
        path: "/projects",
        name: "projects",
        component: ProjectList,
      },
      {
        path: "/posts/:slug",
        name: "single-project",
        component: ProjectCard,
      },
      {
        path: "/contact",
        name: "contact",
        component: ContactComponent,
      }

    ],
});
export { router };