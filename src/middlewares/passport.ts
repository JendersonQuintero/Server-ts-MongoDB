import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import user from '../models/user';

let word = "secretword";

const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: word
}

export default new Strategy(opts, async (payload, done) => {
    try {
        const userR = await user.findById(payload.id);
        if (userR) {
            return done(null, userR);
        }
        return done(null, false);
    } catch (error) {
        console.log(error)
    }
});