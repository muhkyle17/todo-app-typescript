import { useContext } from 'react'
import { TodoContext } from './TodoContext'

export const useTodo = () => {
  const context = useContext(TodoContext)

  if (!context) {
    throw new Error('useTodo must be within a TodoProvider')
  }

  console.log(context, 'context')

  return context
}
