const express = require('express');

const { moviesMock } = require('../utils/mocks/movies');

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router);

    router.get("/:movieId", async function(req, res, next) {
        try {
            const movies = await Promise.resolve(moviesMock[0]);

            res.status(200).json({
                data: movies,
                message: 'movies retrieved'
            });

        } catch (err) {
            next(err);
        }
    });

    router.post("/", async function(req, res, next) {
        try {
            const createMoviesId = await Promise.resolve(moviesMock[0].id);

            res.status(201).json({
                data: createMoviesId,
                message: 'movies created'
            });
        } catch (err) {
            next(err);
        }
    });
    router.put("/:movieId", async function(req, res, next) {
        try {
            const updateMovieId = await Promise.resolve(moviesMock[0].id);

            res.status(200).json({
                data: updateMovieId,
                message: 'movie update'
            });

        } catch (err) {
            next(err);
        }
    });
    router.delete("/:movieId", async function(req, res, next) {
        try {
            const deleteMovieId = await Promise.resolve(moviesMock[0].id);

            res.status(200).json({
                data: deleteMovieId,
                message: 'movie delete'
            });

        } catch (err) {
            next(err);
        }
    });
}

module.exports = moviesApi;