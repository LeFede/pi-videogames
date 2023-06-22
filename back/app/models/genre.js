
import { DataTypes } from "sequelize"

export const Genre = (sequelize) => {

  sequelize.define("Genre", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false
  })

  // sequelize.define('genre', {
  //   name: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //   },
  //   slug: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //   },
  // },
  // {
  //   timestamps: false,
  // })
  
}
