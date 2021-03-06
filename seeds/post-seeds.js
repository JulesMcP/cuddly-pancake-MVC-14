const { Post } = require('../models');

const postdata = [
    {
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
        user_id: 1
    },
    {
        title: 'Nunc purus.',
        post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
        user_id: 4
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        post_url: 'https://stanford.edu/consequat.png',
        user_id: 4
    },
    {
        title: 'In hac habitasse platea dictumst.',
        post_url: 'http://edublogs.org/non/ligula/pellentesque.js',
        user_id: 1
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        post_url: 'http://ucla.edu/consequat/nulla.html',
        user_id: 1
    },
    {
        title: 'Curabitur at ipsum ac tellus semper interdum.',
        post_url: 'https://reverbnation.com/ligula/sit.jpg',
        user_id: 5
    },
    {
        title: 'In hac habitasse platea dictumst.',
        post_url: 'http://china.com.cn/lectus/vestibulum.json',
        user_id: 3
    },
    {
        title: 'Nulla tellus.',
        post_url: 'https://lycos.com/natoque/penatibus/et.html',
        user_id: 2
    },
    {
        title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
        post_url: 'https://gmpg.org/lorem.jpg',
        user_id: 3
    },
    {
        title: 'Etiam justo.',
        post_url: 'https://shareasale.com/quis.json',
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postdata);
module.exports = seedPosts;