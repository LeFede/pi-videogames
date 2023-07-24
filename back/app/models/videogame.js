import { DataTypes } from "sequelize"
import { Genre } from "#db"

export const Videogame = (sequelize) => {

  sequelize.define("Videogame", {

    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    }, 

    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validation: {
        min: 0.00,
        max: 5.00,
      }
    },
    
    released: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false
    },


    genres: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },

    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },

  }, 
  {
    timestamps: false
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
