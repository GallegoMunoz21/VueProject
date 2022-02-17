/***Paquetes a importar***/
import { createApp} from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue"; 
/***Mis Componentes***/
import LastArticles from "./components/LastArticles.vue";
import HelloWorld from "./components/HelloWorld.vue";
import MiComponente from "./components/MiComponente.vue";
import Blog from "./components/Blog.vue";
import Formulario from "./components/Formulario.vue";
import Pagina from "./components/Pagina.vue";
import ErrorComponent from "./components/ErrorComponent.vue";
import Asistentes from "./components/Asistentes.vue";
import Search from "./components/Search.vue";
import Redirect from "./components/Redirect.vue";
import Article from "./components/Article.vue";
import CreateArticle from "./components/CreateArticle.vue";
import EditArticle from "./components/EditArticle.vue";



/***Creación de rutas***/
const routes = [
    { path: '/home', component: LastArticles },
    { path: '/articulo/:id', name:'article', component: Article },
    { path: '/editar/:id', name:'edit', component: EditArticle },
    {path:'/crear-articulo', name:'create', component:CreateArticle},
    { path: '/blog', component: Blog },
    { path: '/formulario', component: Formulario },
    { path: '/pagina/:id?', name:'pagina', component: Pagina },
    { path: '/asistentes', name:'asistentes', component: Asistentes},
    {path: '/ultimos-articulos', component: LastArticles},
    {path: '/buscador/:searchString', component: Search},
    {path: '/redirect/:searchString', component: Redirect},
    { path: '/mi-componente', component: MiComponente },
    { path: '/hola-mundo', component: HelloWorld },
    { path: '/', component: LastArticles },
    { path: '/:pathMatch(.*)*', component: ErrorComponent },
];
 
/***Configuración del router***/
const router = createRouter({
    history: createWebHistory(),
    routes,
});
 
/***Instancia de createApp()***/
const app = createApp(App);
 
/***Instancia del router y montar la app***/
app.use(router);
app.mount("#app");