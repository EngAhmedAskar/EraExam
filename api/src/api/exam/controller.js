import { success, notFound } from '../../services/response/'
import { sendMail } from '../../services/sendgrid'
import { Exam } from '.'
import { uid } from 'rand-token'
import { question } from '../question'

export const create = ({ bodymen: { body } }, res, next) => {
    console.log(body);
    const filter = { is_active: true };
    question.findRandom(filter, {}, {limit: 2}, async (err, questions) => {
        if (err) res.status(500).send("Random questions error");
        Console.log(questions);
    });
    };
        
//     Exam.create(body)
//     .then(success(res, 201))
//     .catch((err) => {
//     /* istanbul ignore elseW */
//     if (err.name === 'MongoError' && err.code === 11000) {
//         res.status(409).json({
//         valid: false,
//         param: 'email',
//         message: 'email already registered'
//         })
//     } else {
//         next(err)
//     }
//     })
// }
    // export const create = ({ bodymen: { body: { email } } }, res, next) =>
    // User.findOne({ email })
    //   .then(notFound(res))
    //   .then((user) => user ? PasswordReset.create({ user }) : null)
    //   .then((invite) => {
    //     if (!invite) return null
    //     const { user, token } = invite
    //     link = `${link.replace(/\/$/, '')}/${token}`
        
    //     const content = `
    //       Hey, ${email}.<br><br>
    //       You requested a new password for your EraApi account.<br>
    //       Please use the following link to set a new password. It will expire in 1 hour.<br><br>
    //       <a href="${link}">${link}</a><br><br>
    //       If you didn't make this request then you can safely ignore this email. :)<br><br>
    //       &mdash; EraApi Team
    //     `
    //     return sendMail({ toEmail: email, subject: 'Invitation to ERA Exam', content })
    //   })
    //   .then(([response]) => response ? res.status(response.statusCode).end() : null)
    //   .catch(next)

    

export const show = ({ params: { token } }, res, next) =>   {
    res.status(200).json(uid(32))

}
//   PasswordReset.findOne({ token })
//     .populate('user')
//     .then(notFound(res))
//     .then((reset) => reset ? reset.view(true) : null)
//     .then(success(res))
//     .catch(next)

// export const update = ({ params: { token }, bodymen: { body: { password } } }, res, next) => {
//   return PasswordReset.findOne({ token })
//     .populate('user')
//     .then(notFound(res))
//     .then((reset) => {
//       if (!reset) return null
//       const { user } = reset
//       return user.set({ password }).save()
//         .then(() => PasswordReset.remove({ user }))
//         .then(() => user.view(true))
//     })
//     .then(success(res))
//     .catch(next)
// }
