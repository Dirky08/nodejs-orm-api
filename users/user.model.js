const { DataTypes } = require('sequalize');

module.exports = model;

function model(sequalize) { 
    const attributes = {
        email: { type: DataTypes.STRING, allowNull: false },
        passwordHarsh: { type: DataTypes.STRING, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false },
        firstname: { type: DataTypes,STRING, allowNull: false }, 
        lastname: { type: DataTypes,STRING, allowNull: false }, 
        role: { type: DataTypes,STRING, allowNull: false }, 
        
        };

        const options = {
            defaultScope: {

                attributes: { exclude: ['passwordHarsh'] }
            },
            scopes: {

                withHash: { attributes: {}, }
     
        }
    };

    return sequalize.define('User', attributes, options);
}