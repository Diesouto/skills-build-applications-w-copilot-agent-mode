import { Router } from 'express';
import { Team } from '../models/team.js';

const teamsRouter = Router();

teamsRouter.get('/', async (_request, response, next) => {
  try {
    const teams = await Team.find().populate('members', 'displayName').lean();
    response.json({ teams });
  } catch (error) {
    next(error);
  }
});

export default teamsRouter;