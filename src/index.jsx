import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import './index.css'
import Routes from './routes'
import antdTheme from './components/antdTheme'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider theme={antdTheme}>
      <Routes />
    </ConfigProvider>
  </StrictMode>,
)
