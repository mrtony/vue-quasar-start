module.exports = {
  title: 'Vue + Quasar',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: 'https://quasar-framework.org/guide/' },
      { text: 'Component', link: 'https://quasar-framework.org/components/' },
    ],
    sidebar: [
      '/installation',
      {
        title: 'Layout',
        collapsable: false,
        children: [
          './layout/layout',
        ]
      },
    ]
  //   sidebar: [
  //     {
  //       title: '安裝',
  //       children: [ 'installation' ]
  //     },
  //     {
  //       title: '安裝',
  //       collapsable: false,
  //       children: [
  //         '/Page-1',
  //         '/Page-2'
  //       ]
  //     },
  //     {
  //       title: 'Group 2',
  //       children: [ /* ... */ ]
  //     }
  //   ]
   }
}