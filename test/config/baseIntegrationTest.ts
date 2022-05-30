import { createConnection, getConnection } from "typeorm"

let app: Express.Application

jest.setTimeout(60000)

beforeAll(async (done) => {
    await createConnection();

    app = (await import('../../src/app')).default

    done()
})

beforeEach(async (done) => {
    await getConnection().synchronize(true)
    done()
})

afterAll(async (done) => {
    await getConnection().close()
    done()
})

export const getApp = () => {
    return app
}