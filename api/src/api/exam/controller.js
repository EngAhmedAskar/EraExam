import { success, notFound } from "../../services/response/";
import { exam } from ".";
import { sign } from "../../services/jwt";
import { question } from "../question";

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  exam
    .count(query)
    .then(count =>
      exam
        .find(query, select, cursor)
        .then
        //     exams => ({
        //     exams: exams.map((exam) => exam.view())

        // })
        ()
    )
    .then(success(res))
    .catch(next);

export const show = ({ params: { token } }, res, next) =>
  exam
    .findOne({ token })
    .then(notFound(res))
    // .then((exam) => exam ? exam.view() : null)
    // .then(exam => console.log(exam))
    .then(success(res))
    .catch(next);

export const create = ({ bodymen: { body } }, res, next) => {
  const filter = { is_active: true };
  question.findRandom(filter, {}, { limit: 2 }, async (err, questions) => {
    if (err) res.status(500).send("Random questions error");
    try {
      console.log(question);
    } catch (err) {
      res.status(500).send("Can't create the exam");
    }
  });
};
// exam.create(body)
//     .then(exam => {

//         success(res, 201)

//     })
//     .catch((err) => {
//         next(err)
//     })

// export const update = ({ bodymen: { body }, params }, res, next) =>
//   exam
//     .findById(params.id)
//     .then(notFound(res))
//     .then(result => {
//       if (!result) return null;
//       // const isAdmin = exam.role === 'admin'
//       const isSelfUpdate = params.id === result.id;
//       if (!isSelfUpdate) {
//         res.status(401).json({
//           valid: false,
//           message: "You can't change other exam's data"
//         });
//         return null;
//       }
//       return result;
//     })
//     .then(exam => (exam ? Object.assign(exam, body).save() : null))
//     .then(exam => (exam ? exam.view(true) : null))
//     .then(success(res))
//     .catch(next);


export const updateOnSubmit = ({  bodymen: { body } } , res, next) =>
    console.log("Here"  + body.questions) 
    // question.findById(id)
    //     .then(notFound(res))
    //     .then((result) => {
    //         if (!result) return null 
    //         return result.set({ description, is_active }).save()
    //             .then(() => result.view(true))
    //     })
    //     // .then((question) => question ? Object.assign(question, body).save() : null)
    //     // .then((question) => question ? question.view(true) : null)
    //     .then(success(res))
    //     .catch(next)

export const addSnapShot = ({ params: { id }, bodymen: { body: { description, is_active } } }, res, next) =>
        question.findById(id)
            .then(notFound(res))
            .then((result) => {
                if (!result) return null 
                return result.set({ description, is_active }).save()
                    .then(() => result.view(true))
            })
            // .then((question) => question ? Object.assign(question, body).save() : null)
            // .then((question) => question ? question.view(true) : null)
            .then(success(res))
            .catch(next)