module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            filename: "./app/data/dev.sqlite3"
        },
        useNullAsDefault: true
    }
};
