module.exports = (sequelize, DataTypes) => {
    const InfoEmployee = sequelize.define('InfoEmployee', {
        id_1c: {
            type: DataTypes.VARCHAR(36),
            allowNull: false
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        X: {
            type: DataTypes.VARCHAR(255),
            allowNull: true
        },
        Y: {
            type: DataTypes.VARCHAR(255),
            allowNull: true
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        movement: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        work_place: {
            type: DataTypes.TEXT,
            allowNull: false
        }
        id: {
            primaryKey: true,
            type: DataTypes.BIGINT,
            allowNull: false
        },

    }, {
        timestamps: false
    })
    return InfoEmployee
}