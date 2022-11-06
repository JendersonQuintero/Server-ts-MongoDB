import { model, Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

export  interface User extends Document{
    email: String;
    name: String;
    lastName: String;
    password: String;
    comparePassword: (password: String) => Promise<boolean>;
}

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});

userSchema.pre('save', async function (next) {
    if (!this.isDirectModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next();
});

userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
}

export default model<User>('user', userSchema);