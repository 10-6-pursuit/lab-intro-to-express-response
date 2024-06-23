const supertest = require("supertest");
const app = require("../app")

describe("test the root path", () => {
    test("it should respond using GET method", () => {
        return supertest(app)
        .get("/")
        .then(res => {
            expect(res.text).toBe("hello world")
        })
    })

    test("should return a status code 200", () => {
        return supertest(app)
        .get("/")
        .then(res => {
            expect(res.statusCode).toBe(200)
        })
    })
})

