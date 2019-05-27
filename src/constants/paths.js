import React from 'react'
import Loadable from 'react-loadable'

export const paths = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/character/:id',
    name: 'Character'
  }
].map(item => {
  return {
    path: `/${item.name.toLowerCase()}`,
    ...item,
    component: Loadable({
      loader: () => import(`../components/${item.name.toLowerCase()}`),
      loading: () => <div>Loading...</div>
    })
  }
})
