// Requirements
const request = require("supertest");
const expect = require("expect");

const app = require("../app");

const Movie = require("../models/movie");

var movies;

before(async () => {
    await Movie.seedDB();
    movies = await Movie.getAllMovies();
});

describe("GET /movies", () => {
    it("should get all movies", done => {
        request(app)
            .get("/api/movies")
            .expect(200)
            .expect(res => {
                expect(res.body).hasOwnProperty("data");
                expect(res.body).hasOwnProperty("links");
            })
            .end(done);
    });

    it('should have link rel=next in response', done => {
        request(app)
            .get("/api/movies?perPage=2&offset=0")
            .expect(200)
            .expect(res => {
                expect(res.body).hasOwnProperty("links");
                expect(res.body.links[0]).hasOwnProperty("rel");
                expect(res.body.links[0].rel).toBe("next");
            })
            .end(done);
    });

    it('should have link rel=prev in response', done => {
        request(app)
            .get("/api/movies?perPage=2&offset=2")
            .expect(200)
            .expect(res => {
                expect(res.body).hasOwnProperty("links");
                expect(res.body.links[0]).hasOwnProperty("rel");
                expect(res.body.links[0].rel).toBe("prev");
                expect(res.body.links[1]).hasOwnProperty("rel");
                expect(res.body.links[1].rel).toBe("next");
            })
            .end(done);
    });
});

describe("GET /movies/:id", () => {
    it("should get one movie", done => {
        request(app)
            .get(`/api/movies/${movies[0].id}`)
            .expect(200)
            .expect(res => {
                expect(res.body).hasOwnProperty("data");
                expect(res.body.data.title).toBe(movies[0].title);
            })
            .end(done);
    });

    it("should not get a movie with wrong ID", done => {
        request(app)
            .get("/api/movies/4749402746438")
            .expect(404)
            .expect(res => {
                expect(res.body).hasOwnProperty("error");
                expect(res.body.error).hasOwnProperty("msg");
            })
            .end(done);
    });

});