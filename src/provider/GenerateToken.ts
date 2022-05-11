import * as jwt from "jsonwebtoken"

export default class GenerateToken {

    async generate(account_id: string) {
        const token = jwt.sign({userId: account_id}, process.env.SECRET, { expiresIn: "1h", subject: account_id })

        return token
    }
}