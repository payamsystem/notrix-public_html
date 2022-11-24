module.exports = function(sequelize, DataTypes) {
                          return sequelize.define('Wo_Langs', {
                            id: {
                              autoIncrement: true,
                              type: DataTypes.INTEGER,
                              allowNull: false,
                              primaryKey: true
                            },
                            lang_key: {
                              type: DataTypes.STRING(160),
                              allowNull: true
                            },
                            type: {
                              type: DataTypes.STRING(100),
                              allowNull: false,
                              defaultValue: ""
                            },arabic: {type: DataTypes.TEXT,
                        allowNull: true
                       },bengali: {type: DataTypes.TEXT,
                        allowNull: true
                       },chinese: {type: DataTypes.TEXT,
                        allowNull: true
                       },croatian: {type: DataTypes.TEXT,
                        allowNull: true
                       },danish: {type: DataTypes.TEXT,
                        allowNull: true
                       },dutch: {type: DataTypes.TEXT,
                        allowNull: true
                       },english: {type: DataTypes.TEXT,
                        allowNull: true
                       },filipino: {type: DataTypes.TEXT,
                        allowNull: true
                       },french: {type: DataTypes.TEXT,
                        allowNull: true
                       },german: {type: DataTypes.TEXT,
                        allowNull: true
                       },hebrew: {type: DataTypes.TEXT,
                        allowNull: true
                       },hindi: {type: DataTypes.TEXT,
                        allowNull: true
                       },indonesian: {type: DataTypes.TEXT,
                        allowNull: true
                       },italian: {type: DataTypes.TEXT,
                        allowNull: true
                       },japanese: {type: DataTypes.TEXT,
                        allowNull: true
                       },korean: {type: DataTypes.TEXT,
                        allowNull: true
                       },persian: {type: DataTypes.TEXT,
                        allowNull: true
                       },portuguese: {type: DataTypes.TEXT,
                        allowNull: true
                       },russian: {type: DataTypes.TEXT,
                        allowNull: true
                       },spanish: {type: DataTypes.TEXT,
                        allowNull: true
                       },swedish: {type: DataTypes.TEXT,
                        allowNull: true
                       },turkish: {type: DataTypes.TEXT,
                        allowNull: true
                       },urdu: {type: DataTypes.TEXT,
                        allowNull: true
                       },vietnamese: {type: DataTypes.TEXT,
                        allowNull: true
                       },: {type: DataTypes.TEXT,
                        allowNull: true
                       }}, {
                            sequelize,
                            timestamps: false,
                            tableName: 'Wo_Langs'
                          });
                        };