import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import TranslatePage from '../components/TranslatePage.vue'
import DictionaryPage from '../components/DictionaryPage.vue'
import QuizPage from '../components/QuizPage.vue'
import NotifPage from '../components/NotifPage.vue'
import HelpPage from '../components/HelpPage.vue'
import AuthView from '../views/AuthView.vue'
import LoginPage from '../components/LoginPage.vue'
import RegisterPage from '../components/RegisterPage.vue'

const routes = [
  {
    path: '/',
    component: AuthView,
    children: [
      {
        path: '/',
        name: 'login',
        component: LoginPage,
      },
      {
        path: '/register',
        name: 'register',
        component: RegisterPage,

      },
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: MainView,
    children: [
      {
        path: '/translate',
        name: 'translate',
        component: TranslatePage,
        meta: {
           title: 'Translate'
        }
      },
      {
        path: '/dictionary',
        name: 'dictionary',
        component: DictionaryPage,
        meta: {
          title: 'Dictionary'
        }
      },
      {
        path: '/quiz',
        name: 'quiz',
        component: QuizPage,
        meta: {
          title: 'Quiz'
        }
      },
      {
        path: '/notifications',
        name: 'notifications',
        component: NotifPage,
        meta: {
          title: 'Notifications'
        }
      },
      {
        path: '/help',
        name: 'help',
        component: HelpPage,
        meta: {
          title: 'Help'
        }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
