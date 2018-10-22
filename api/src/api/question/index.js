import { Router } from 'express'
import { middleware as query } from 'querymen'

import { index } from './controller'
import { schema } from './model'
export {question ,schema } from './model'

const router = new Router()
const {  role } = schema.tree

router.get('/',
 
  query(),
  index)

  export default router