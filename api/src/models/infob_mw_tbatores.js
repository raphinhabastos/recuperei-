import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_mw_tbatores extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_ator: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_filme: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infob_mw_filmes',
        key: 'id_filme'
      }
    },
    nm_ator: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    img_autor: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_mw_tbatores',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ator" },
        ]
      },
      {
        name: "id_filme",
        using: "BTREE",
        fields: [
          { name: "id_filme" },
        ]
      },
    ]
  });
  }
}
