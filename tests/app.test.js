const request = require("supertest");
const app = require("../app.js");

describe("Test the root path", () => {
  test("It should respond to the GET method", () => {
    const response = request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello, world!");
  });
});

describe("Test the terminator path", () => {
  test("It should respond with 'I'll be back'", () => {
    const response = request(app).get("/terminator");
    expect(response.text).toBe("I'll be back");
  });

  test("It should respond with 'Hasta la vista, baby'", () => {
    const response = request(app).get("/terminator2");
    expect(response.text).toBe("Hasta la vista, baby");
  });
});

describe("Test the magic8 path", () => {
  test("It should respond with a Magic 8 Ball response", () => {
    const response = request(app).get("/magic8");
    expect(response.text).toMatch(/<h1>.*<\/h1>/);
  });
});
