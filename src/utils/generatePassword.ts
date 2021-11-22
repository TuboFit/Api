import * as  bcrypt from 'bcrypt';

export function encryptedPassword(password: string, salt: number) {
    const saltRounds = bcrypt.genSaltSync(salt)
    const hashPassword = bcrypt.hashSync(password, saltRounds)
    return hashPassword
}