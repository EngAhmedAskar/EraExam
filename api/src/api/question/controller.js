import { success, notFound } from '../../services/response/'
import { question } from './model'
import { sign } from '../../services/jwt'

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
question.count(query)
    .then(count => question.find(query, select, cursor)
      .then(questions => ({
        rows: questions.map((question) => question.view()),
        count
      }))
    )
    .then(success(res))
    .catch(next)
// export const getQs = ({ params }, res, next) =>
//     question.findById(params.id)
//         .then(notFound(res))
//         .then((question) => question ? question.view() : null)
//         .then(success(res))
//         .catch(next)



// export const create = ({ bodymen: { body } }, res, next) =>
//     question.create(body)
//         .then(question => {
//             sign(question.id)
//                 .then((token) => ({ token, question: question.view(true) }))
//                 .then(success(res, 201))
//         })
//         .catch((err) => {
//             /* istanbul ignore else */
//             if (err.name === 'MongoError' && err.code === 11000) {
//                 res.status(409).json({
//                     valid: false,
//                     param: 'email',
//                     message: 'email already registered'
//                 })
//             } else {
//                 next(err)
//             }
//         })


//         export const update = ({ bodymen: { body }, params, question }, res, next) =>
//   question.findById(params.id === 'me' ? question.id : params.id)
//     .then(notFound(res))
//     .then((result) => {
//       if (!result) return null
//       const isAdmin = question.role === 'admin'
//       const isSelfUpdate = question.id === result.id
//       if (!isSelfUpdate && !isAdmin) {
//         res.status(401).json({
//           valid: false,
//           message: 'You can\'t change other question\'s data'
//         })
//         return null
//       }
//       return result
//     })
//     .then((question) => question ? Object.assign(question, body).save() : null)
//     .then((question) => question ? question.view(true) : null)
//     .then(success(res))
//     .catch(next)