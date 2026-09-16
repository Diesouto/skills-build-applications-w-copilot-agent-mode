import mongoose from 'mongoose';
import { connectDatabase } from '../config/database.js';
import { Activity } from '../models/activity.js';
import { Leaderboard } from '../models/leaderboard.js';
import { Team } from '../models/team.js';
import { User } from '../models/user.js';
import { Workout } from '../models/workout.js';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await connectDatabase();

    await Promise.all([
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const [paceSet, summitCrew] = await Team.create([
      {
        name: 'Pace Setters',
        description: 'A lunchtime running club building consistent weekly mileage.',
        totalPoints: 840,
      },
      {
        name: 'Summit Crew',
        description: 'Trail and strength athletes preparing for their next peak.',
        totalPoints: 735,
      },
    ]);

    const [maya, liam, noor] = await User.create([
      {
        displayName: 'Maya Chen',
        email: 'maya.chen@example.com',
        team: paceSet._id,
        totalPoints: 480,
        weeklyPoints: 180,
      },
      {
        displayName: 'Liam Brooks',
        email: 'liam.brooks@example.com',
        team: paceSet._id,
        totalPoints: 360,
        weeklyPoints: 140,
      },
      {
        displayName: 'Noor Patel',
        email: 'noor.patel@example.com',
        team: summitCrew._id,
        totalPoints: 510,
        weeklyPoints: 210,
      },
    ]);

    await Team.bulkWrite([
      { updateOne: { filter: { _id: paceSet._id }, update: { members: [maya._id, liam._id] } } },
      { updateOne: { filter: { _id: summitCrew._id }, update: { members: [noor._id] } } },
    ]);

    await Activity.create([
      {
        user: maya._id,
        type: 'Run',
        durationMinutes: 42,
        distanceKm: 6.8,
        caloriesBurned: 430,
        points: 90,
        completedAt: new Date('2026-09-15T12:15:00Z'),
      },
      {
        user: liam._id,
        type: 'Cycle',
        durationMinutes: 55,
        distanceKm: 18.4,
        caloriesBurned: 520,
        points: 110,
        completedAt: new Date('2026-09-14T17:30:00Z'),
      },
      {
        user: noor._id,
        type: 'Strength training',
        durationMinutes: 48,
        caloriesBurned: 390,
        points: 120,
        completedAt: new Date('2026-09-15T06:45:00Z'),
      },
    ]);

    await Leaderboard.create([
      { user: noor._id, team: summitCrew._id, rank: 1, score: 210, weekOf: new Date('2026-09-14T00:00:00Z') },
      { user: maya._id, team: paceSet._id, rank: 2, score: 180, weekOf: new Date('2026-09-14T00:00:00Z') },
      { user: liam._id, team: paceSet._id, rank: 3, score: 140, weekOf: new Date('2026-09-14T00:00:00Z') },
    ]);

    await Workout.create([
      {
        title: 'Morning Mobility Flow',
        focus: 'Mobility',
        durationMinutes: 20,
        difficulty: 'Beginner',
        exercises: ['Cat-cow', 'Worlds greatest stretch', 'Bodyweight squat'],
      },
      {
        title: 'Trail Ready Strength',
        focus: 'Lower body strength',
        durationMinutes: 45,
        difficulty: 'Intermediate',
        exercises: ['Goblet squat', 'Reverse lunge', 'Single-leg deadlift'],
      },
      {
        title: 'Tempo Run Builder',
        focus: 'Endurance',
        durationMinutes: 50,
        difficulty: 'Advanced',
        exercises: ['Warm-up jog', 'Tempo intervals', 'Easy cooldown'],
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
