const { User } = require('../models');

const userData = [
    {
      "name": "Jay",
      "email": "jay@gmail.com",
      "password": "password12345"
    },
    {
      "name": "Kay",
      "email": "kay@gmail.com",
      "password": "password12345"
    },
    {
      "name": "leah",
      "email": "leah@aol.com",
      "password": "password12345"
    }
  ]

  const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;