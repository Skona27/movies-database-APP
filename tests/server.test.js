// Requirements
const request = require("supertest");
const expect = require("expect");

const app = require("../app");

describe("Server", () => {
    it("should respond", done => {
        request(app)
            .get("/api/movies")
            .expect(200)
            .end(done);
    });

    it("should handle error", done => {
        request(app)
            .get("/random-route")
            .expect(404)
            .expect((req) => {
                expect(req.body).hasOwnProperty("error")
            })
            .end(done);
    });
});