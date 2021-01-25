const db = require('./models')

db.user_ship.destroy({
    where: {
        userId: 1
    }
}).then(rowsDeleted => {
    console.log(rowsDeleted)
    process.exit()
})