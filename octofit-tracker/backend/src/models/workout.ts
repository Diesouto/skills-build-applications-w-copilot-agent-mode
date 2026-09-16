import { model, Schema } from 'mongoose';

const workoutSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    focus: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    difficulty: { type: String, required: true, enum: ['Beginner', 'Intermediate', 'Advanced'] },
    exercises: [{ type: String, required: true, trim: true }],
  },
  { timestamps: true },
);

export const Workout = model('Workout', workoutSchema);