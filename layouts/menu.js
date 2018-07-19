export default {
  items: [
    {
      name: 'Dashboard',
      url: '/',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: 'Supplier',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'List',
      url: '/supplier/list',
      icon: 'icon-drop'
    },
    {
      name: 'Add',
      url: '/supplier/add',
      icon: 'icon-pencil'
    }
  ]
}
