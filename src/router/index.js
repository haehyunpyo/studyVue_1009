/* 실제로 라우팅을 해주는 파일. 이곳에서 각 파일로 연결시켜 줍니다. */
import { createRouter, createWebHistory } from "vue-router"
import indexPage from "@/views/IndexPage.vue"
import mainPage from "@/views/MainPage.vue"
import boardList from "@/views/BoardList.vue"
import detailPage from "@/views/DetailPage.vue"
import boardList2 from "@/views/BoardList2.vue"
import joinPage from "@/views/JoinPage.vue"
import loginPage from "@/views/LoginPage.vue"
import writePage from "@/views/WritePage.vue"

const routes = [
    {path: '/', name:'index', component: indexPage},
    {path: '/main', name:'mainPage', component: mainPage},
    {path: '/boardList', name:'boardList', component: boardList},
    {path: '/detail', name:'detailPage', component: detailPage},
    {path: '/boardList2', name:'boardList2', component: boardList2},
    {path: '/join', name:'joinPage', component: joinPage},
    {path: '/login', name:'loginPage', component: loginPage},
    {path: '/write', name:'writePage', component: writePage},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;