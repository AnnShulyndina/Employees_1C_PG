module.exports = (sequelize, DataTypes) => {
    const human = sequelize.define('human', {
        id_1c: {
            type: DataTypes.VARCHAR(36),
            allowNull: false
        },

        name: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        phone:{
            type: DataTypes.TEXT,
            allowNull: true
        },

        id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },

        status: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        position_id: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        position_name: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        position_code: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        position_short_name: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        position_group: {
            type: DataTypes.TEXT
            allowNull: true
        },

        position_level: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        position_category: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        position_view: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        position_type: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        position_work_nature: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        position_introduction_date: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        position_main_position: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        department_id: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        department: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        department_code: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        department_level: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        department_profile: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        department_type: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        department_view: {
            type: DataTypes.TEXT
            allowNull: true
        },

        email: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        oio_p_id: {
            type: DataTypes.BIGINT,
            allowNull: true
        },

        oio_a_id: {
            type: DataTypes.BIGINT,
            allowNull: true
        },


    }, {
        timestamps: false
    })
    return human
}