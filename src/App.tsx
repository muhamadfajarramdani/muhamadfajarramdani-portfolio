import { Routes, Route } from 'react-router-dom'
import { useTheme } from '@/hooks/useTheme'
import Home from '@/pages/Home'
import BlogPost from '@/pages/BlogPost'

export default function App() {
  useTheme()
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  )
}
