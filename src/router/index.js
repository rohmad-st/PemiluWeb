import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  vueAuth
} from '@/services/symbolic'
import Meta from 'vue-meta'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '*',
      component: () => import('@/components/NotFound')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/Login')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/Home')
    },
    {
      path: '/linimasa',
      name: 'Linimasa',
      component: () => import('@/pages/Linimasa'),
      props: true,
      children: [{
          path: 'hint',
          name: 'LinimasaHint',
          component: () => import('@/pages/Linimasa')
        },
        {
          path: 'detail/:id',
          name: 'LinimasaDetail',
          component: () => import('@/pages/Linimasa')
        },
        {
          path: 'create-post',
          name: 'LinimasaCreatePost',
          component: () => import('@/pages/Linimasa'),
          meta: {
            AuthenticationRequired: true
          }
        }
      ]
    },
    {
      path: '/pendidikan-politik',
      name: 'PendidikanPolitik',
      component: () => import('@/pages/pendidikan-politik'),
      props: true,
      children: [{
          path: 'quiz/ikuti/:id',
          name: 'PendidikanPolitikQuizIkuti',
          component: () => import('@/pages/pendidikan-politik'),
          meta: {
            AuthenticationRequired: true
          }
        },
        {
          path: 'quiz/lanjut/:id',
          name: 'PendidikanPolitikQuizLanjut',
          component: () => import('@/pages/pendidikan-politik'),
          meta: {
            AuthenticationRequired: true
          }
        },
        {
          path: 'quiz/hasil/:id',
          name: 'PendidikanPolitikQuizHasil',
          component: () => import('@/pages/pendidikan-politik'),
          meta: {
            AuthenticationRequired: true
          }
        },
        {
          path: 'quiz/kecenderungan',
          name: 'PendidikanPolitikQuizKecenderungan',
          component: () => import('@/pages/pendidikan-politik'),
          meta: {
            AuthenticationRequired: true
          }
        },
        {
          path: 'hint',
          name: 'PendidikanPolitikHint',
          component: () => import('@/pages/pendidikan-politik'),
          meta: {
            AuthenticationRequired: true
          }
        },
        {
          path: 'detail/:id',
          name: 'PendidikanPolitikDetail',
          component: () => import('@/pages/pendidikan-politik')
        }
      ]
    },
    {
      path: '/catatan-pilihan',
      name: 'CatatanPilihan',
      component: () => import('@/pages/CatatanPilihan'),
      meta: {
        AuthenticationRequired: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/pages/Profile'),
      meta: {
        AuthenticationRequired: true
      }
    },
    {
      path: '/profile/verified-steps',
      name: 'ProfileVerified',
      component: () => import('@/pages/Profile/ProfileVerified')
    },
    {
      path: '/profile/setting',
      name: 'ProfileSetting',
      component: () => import('@/pages/Profile/Setting'),
      meta: {
        AuthenticationRequired: true
      }
    },
    {
      path: '/profile/badge',
      name: 'ProfileBadge',
      component: () => import('@/pages/Profile/Badge'),
      meta: {
        AuthenticationRequired: true
      }
    },
    {
      path: '/profile/badge/:badgeId',
      name: 'ProfileBadgeDetail',
      component: () => import('@/pages/Profile/BadgeDetail'),
      meta: {
        AuthenticationRequired: true
      }
    },
    {
      path: '/profile/data-lapor',
      name: 'DataProfileLapor',
      component: () => import('@/pages/Profile/DataProfileLapor')
    },
    {
      path: '/wordstadium',
      name: 'WordStadium',
      component: () => import('@/pages/WordStadium')
    },
    {
      path: '/lapor',
      name: 'Lapor',
      component: () => import('@/pages/Lapor')
    },
    {
      path: '/perhitungan',
      name: 'Perhitungan',
      component: () => import('@/pages/Perhitungan')
    },
    {
      path: '/share',
      name: 'Share',
      component: () => import('@/pages/Share'),
      props: true,
      children: [{
          path: 'pilpres/:id',
          name: 'SharePilpres',
          component: () => import('@/pages/Share')
        },
        {
          path: 'janjipolitik/:id',
          name: 'ShareJanjiPolitik',
          component: () => import('@/pages/Share')
        },
        {
          path: 'tanya/:id',
          name: 'ShareTanya',
          component: () => import('@/pages/Share')
        },
        {
          path: 'kuis/:id',
          name: 'ShareKuis',
          component: () => import('@/pages/Share')
        },
        {
          path: 'hasilkuis/:id',
          name: 'ShareHasilKuis',
          component: () => import('@/pages/Share')
        },
        {
          path: 'kecenderungan/:id',
          name: 'ShareKecenderungan',
          component: () => import('@/pages/Share')
        },
        {
          path: 'badge/:id',
          name: 'ShareBadge',
          component: () => import('@/pages/Share')
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.name === from.name) {
      return false
    } else if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

router.beforeEach(function (to, from, next) {
  if (
    to.matched.some(record => record.meta.AuthenticationRequired) &&
    !vueAuth.isAuthenticated()
  ) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})

Vue.use(Meta)

export default router
