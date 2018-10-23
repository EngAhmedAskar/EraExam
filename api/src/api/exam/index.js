import { Router } from 'express'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, show, update } from './controller'
import { schema } from './model'
export { Exam, schema } from './model'

const router = new Router()
const { email } = schema.tree

/**
 * @api {post} /exam/invitation Send email
 * @apiPermission master
 * @apiParam {String} email Email address to receive the invitation reset token.
 * @apiSuccess (Success 202) 202 Accepted.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.post('/invitation',
//   master(),
  body({ email }),
  create)

/**
 * @api {get} /password-resets/:token Verify token
 * @apiName VerifyPasswordReset
 * @apiGroup PasswordReset
 * @apiSuccess {String} token Password reset token.
 * @apiSuccess {Object} user User's data.
 * @apiError 404 Token has expired or doesn't exist.
 */
router.get('/:token',
  show)

/**
 * @api {put} /password-resets/:token Submit password
 * @apiName SubmitPasswordReset
 * @apiGroup PasswordReset
 * @apiParam {String{6..}} password User's new password.
 * @apiSuccess {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Token has expired or doesn't exist.
 */
// router.put('/:token',
//   body({ password }),
//   update)

export default router
