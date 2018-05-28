# 建立新專案

## 使用vue cli

用vue cli建立專案
```
vue create vue-quasar-start -g
```

加入quasar
```
vue add quasar
```

會詢問要用哪一種theme-選MD
```
? Select Quasar Theme: (Use arrow keys)
> Material Design
  iOS Theme
```

其它選項. (RTL: language i18)
```
Allow Quasar to replace App.vue, About.vue, Home.vue and (if available) router.js? Yes
? Import all Quasar components, directives and plugins? Yes
? Use RTL support? (y/N) N
? Choose Icon Set (Use arrow keys)
> Material Icons (recommended)
  Fontawesome  Ionicons
  MDI
? Features
> Material ICON
```

## 啟動專案

```
npm run serve
```

---

## 使用quasar cli
```
npm install -g quasar-cli
```

```
quasar init quasar-start-kit
```

# 參考專案
- [quasar-starter-kit](https://github.com/quasarframework/quasar-starter-kit/tree/master/template/src)