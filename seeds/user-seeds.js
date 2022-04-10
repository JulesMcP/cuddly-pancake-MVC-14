const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        username: 'julio',
        email: 'julio@gmail.com',
        password: 'pass1234'
    },
    {
        username: 'mackdaddy',
        email: 'whosyourdaddy@mail.com',
        password: 'pass1234'
    },
    {
        username: 'happyface',
        email: 'smilin@happymail.com',
        password: 'pass1234'
    },
    {
        username: 'peacemaker',
        email: 'winchester@mail.gov',
        password: 'pass1234'
    },
    {
        username: 'puppylove',
        email: 'marley+me@mail.com',
        password: 'pass1234'
    },
    {
        username: 'Kakashi',
        email: 'ninjamaster@hiddenleaf.net',
        password: 'pass1234'
    },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;