import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { password as passwordAuth, master, token } from '../../services/passport'
import { index,create,update } from './controller'
import { schema } from './model'
export question, { schema } from './model'

const router = new Router()
const { description,is_active } = schema.tree

router.get('/',
  // token({ required: true, roles: ['admin'] }),
  query(),
  index)

  router.post('/',
 
  body({ description, is_active }),
  create)
  
  router.put('/:id',
  // token({ required: true }),
  body({ description, is_active }),
  update)


export default router