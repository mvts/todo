const { DataTypes } = require("sequelize");
const db = require(".");

const ItemStatus = {
  COMPLETED: "Completed",
  STILL_DUE: "Still due",
  OVERDUE: "Overdue",
};

const TodoItem = db.sequelize.define("TodoItem", {
  content: {
    type: DataTypes.TEXT(255),
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  dueDateTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.VIRTUAL,
    get() {
      if (this.completed) {
        return ItemStatus.COMPLETED;
      } else if (this.dueDateTime <= Date.now()) {
        return ItemStatus.OVERDUE;
      } else {
        return ItemStatus.STILL_DUE;
      }
    },
  },
});

module.exports = TodoItem;
