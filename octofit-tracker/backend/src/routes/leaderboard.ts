import { Router } from 'express';
import { Leaderboard } from '../models/leaderboard.js';

const leaderboardRouter = Router();

leaderboardRouter.get('/', async (_request, response, next) => {
  try {
    const leaderboard = await Leaderboard.find()
      .populate('user', 'displayName')
      .populate('team', 'name')
      .sort({ rank: 1 })
      .lean();
    response.json({ leaderboard });
  } catch (error) {
    next(error);
  }
});

export default leaderboardRouter;