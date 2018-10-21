import mongoose, {
  Schema
} from 'mongoose'

const statuses = ['SENT', 'OPEND', 'ANSWERED', 'SUSPENDED']
const resultes = ['PASS', 'FAIL']
const examSchema = new Schema({
  std_email: {
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
    type: timestamps,
  },
  end_time: {
    type: timestamps,
  },
  spent_time: {
    type: number,
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
  }]
}, {
  timestamps: true
})


const model = mongoose.model('exam', examSchema)

export const schema = model.schema
export default model
