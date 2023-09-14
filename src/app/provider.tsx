'use client'

import { Provider } from 'react-redux'
import { Children } from '@/module/interface/global'
import store from '@/module/store'

const Providers: React.FC<Children> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

export default Providers
