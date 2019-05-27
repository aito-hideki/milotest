import React from 'react'
import Loadable from 'react-loadable'

export const paths = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/character/:id',
    component: 'character-detail',
    name: 'Character Detail'
  }
].map(item => {
  return {
    path: `/${item.name.toLowerCase()}`,
    ...item,
    component: Loadable({
      loader: () => import(`../containers/${(item.component || item.name).toLowerCase()}`),
      loading: () => <div>Loading...</div>
    })
  }
})
