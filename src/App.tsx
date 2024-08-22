import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const TodoApp = React.lazy(() => import('./pages/TodoApp'))

const App:React.FC = () => {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<TodoApp />} />
      <Route path='/todo' element={<TodoApp />} />
      <Route path='*' element={<h1>Not Found</h1>} />
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
