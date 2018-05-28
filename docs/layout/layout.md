# Layout

關於layout的主題有很多個.
- Guide: [Adding Pages and Layouts](https://quasar-framework.org/guide/app-adding-pages-and-layouts.html "Layout")
- Components: [Layout](https://quasar-framework.org/components/layout.html "Layout")

## Layout的使用
定義
```
Layouts are the elements that wrap page content, like a navigational bar or drawer. Multiple pages can share the same Layout, so the code is reusable, which is one of their key points.
```

<b>Layout並不是必需的!</b> 通常在設計時, pages與layout是分開的
```
src/pages
src/layouts
```

在[Nested Routes](https://quasar-framework.org/components/layout.html)時, 就可以用到layout.


假設在router設計上是這樣的
- user: /
- profile: /user/profile
- posts: /user/posts

因為user是base, 所以profile, posts可以使用user的layout base, 就有共用的toolbar, drawer, tabs, page-container, footer.

[Layout](https://quasar-framework.org/components/layout.html "Layout")
```
<!-- /src/layouts/User.vue -->
<template>
  <q-layout>
    ...
    <!-- this is where the Pages are injected -->
    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    ...
  </q-layout>
</template>
```
```
<!-- /src/pages/Profile.vue or Posts.vue -->
<template>
  <q-page>
    ...page content...
  </q-page>
</template>
```

```
// src/router/routes.js

import User from 'layouts/User'
import Profile from 'pages/Profile'
import Posts from 'pages/Posts'

const routes = [
  {
    path: '/user',

    // we use /src/layouts/User component which is imported above
    component: User,

    // hey, it has children routes and User has <router-view> in it;
    // It is really a Layout then!
    children: [
      // Profile page
      {
        path: 'profile', // here it is, route /user/profile
        component: Profile // we reference /src/pages/Profile.vue imported above
      },

      // Posts page
      {
        path: 'posts', // here it is, route /user/posts
        component: Posts // we reference /src/pages/Posts.vue imported above
      }
    ]
  }
]

export default routes
```
