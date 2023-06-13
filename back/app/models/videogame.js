import { DataTypes } from "sequelize"

export const Videogame = (sequelize) => {

  sequelize.define("videogame", {

  })
  // sequelize.define('videogame', {
  //
  //   name: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //   },
  //
  //   description: {
  //     type: DataTypes.STRING,
  //     allowNull: false
  //   },
  //
  //   rating: {
  //     type: DataTypes.FLOAT,
  //     allowNull: false,
  //     validation: {
  //       min: 0.00,
  //       max: 5.00,
  //     }
  //   },
  //
  //   // genres: {
  //   //
  //   // },
  //   //
  //   released: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //   },
  //
  //   platforms: {
  //     type: DataTypes.ARRAY(DataTypes.STRING),
  //     allowNull: false
  //   },
  //
  //   image: {
  //     type: DataTypes.STRING,
  //     allowNull: false
  //   }
  //
  // }, 
  // {
  //   timestamps: false,
  // });
}
