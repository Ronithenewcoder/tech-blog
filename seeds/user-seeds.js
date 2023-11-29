const { User } = require('../models');

const userData = [
    {
      "username": "Jay",
      "email": "jay@gmail.com",
      "password": "password12345"
    },
    {
      "username": "Kay",
      "email": "kay@gmail.com",
      "password": "password12345"
    },
    {
      "username": "leah",
      "email": "leah@aol.com",
      "password": "password12345"
    }
  ]

  const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;