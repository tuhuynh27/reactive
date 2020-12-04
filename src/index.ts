import { createState } from './state'
import { createComponent } from './createComponent'
import { on } from './mountHandler'
import { useEffect } from './useEffect'
import { Router } from './router'

interface ReOdd {
  useState: (newState: Record<string, any>) => Record<string, any>
  render: (selector: string, fn: () => string) => void
  useEffect: (func: () => void) => void
  on: (selector: string) => object
  Router: typeof Router
}

const ReOdd: ReOdd = {
  useState: createState,
  render: createComponent,
  useEffect,
  on,
  Router: Router
}

export default ReOdd