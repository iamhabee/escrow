export default async function getMenuData() {
  return [
    // {
    //   category: true,
    //   title: 'Dashboards',
    // },
    {
      title: 'Dashboard',
      key: 'dashboard',
      icon: 'fe fe-home',
      url: '/dashboard',
      // roles: ['admin'], // set user roles with access to this route
    },
    {
      title: 'Profile Management',
      key: 'kyc',
      icon: 'fe fe-user',
      url: '/profile',
    },
    {
      title: 'Transactions History',
      key: 'wallet',
      icon: 'fe fe-pocket',
      url: '/wallet',
    },
  ]
}
