import { success, notFound } from '../../services/response/'
import { question } from '.'
import { sign } from '../../services/jwt'

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
    question.count(query)
        .then(count => question.find(query, select, cursor)
            .then(
                //     questions => ({
                //     questions: questions.map((question) => question.view())

                // })
            )
        )
        .then(success(res))
        .catch(next)
export const getQs = ({ params }, res, next) =>
    question.findById(params.id)
        .then(notFound(res))
        .then((question) => question ? question.view() : null)
        .then(success(res))
        .catch(next)



export const create = ({ bodymen: { body } }, res, next) =>
    question.create(body)
        .then(question => {

            success(res, 201)

        })
        .catch((err) => {
            next(err)
        })


export const update = ({ params: { id }, bodymen: { body: { description, is_active } } }, res, next) =>

    question.findById(id)
       
        .then(notFound(res))
        .then((result) => {
           

            if (!result) return null
            // const isAdmin = question.role === 'admin'

            
            return result.set({ description, is_active }).save()
                .then(() => result.view(true))

            // const isSelfUpdate = id === result.id
            // if (!isSelfUpdate) {
            //     res.status(401).json({
            //         valid: false,
            //         message: 'You can\'t change other question\'s data'
            //     })
            //     return null
            // }
            // return result
        })
        // .then((question) => question ? Object.assign(question, body).save() : null)
        // .then((question) => question ? question.view(true) : null)
        .then(success(res))
        .catch(next)