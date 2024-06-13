const { getUserById } = require('./user');

getUserById(1, function (error, user) {
    if (error) {
        throw new Error(error);
    }

    console.log(user);
});

getUserById(3, function (error, user) {
    if (error) {
        throw new Error(error);
    }

    console.log(user);
});
