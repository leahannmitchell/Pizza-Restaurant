function getAllusers(req, res,) {
  db.any('SELECT* FROM users')
    .then(function (data) {
      res.status(200)
        .json({
 //         status: 'success',
          data: data,
          message: 'Retrieved ALL users'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}