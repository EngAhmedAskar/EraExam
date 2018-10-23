import mongoose, {Schema} from 'mongoose'
import { uid } from 'rand-token'

const statuses = ['SENT', 'OPEND', 'ANSWERED', 'SUSPENDED']
const resultes = ['PASS', 'FAIL']
const examSchema = new Schema({
  email: {
    type: String,
    match: /^\S+@\S+\.\S+$/,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  status: {
    type: String,
    enum: statuses,
    default: 'SENT',
    index: true
  },
  result: {
    type: String,
    enum: resultes,
    default: 'FAIL',
  },
  start_time: {
    type: Date,
  },
  end_time: {
    type: Date,
  },
  spent_time: {
    type: Number,
    default: 120,
  },
  questions: [{
    _question_id: {
      type: Schema.Types.ObjectId,
      ref: "Question"
    },
    answer: String,
    //I can calculate it based on last saved snapshot time
    spent_time: Number,
    snap_shots: [String]
  }],
  token: {
    type: String,
    unique: true,
    index: true,
    default: () => uid(32)
  },
}, {
  timestamps: true
})


const model = mongoose.model('Exam', examSchema)

export const schema = model.schema
export default model
