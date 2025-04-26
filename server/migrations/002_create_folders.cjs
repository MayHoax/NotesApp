exports.up = (pgm) => {
  pgm.createTable("folders", {
    id: { type: "SERIAL", primaryKey: true },
    user_id: {
      type: "INTEGER",
      notNull: true,
      references: "users(id)",
      onDelete: "CASCADE",
    },
    name: { type: "VARCHAR(100)", notNull: true },
    created_at: { type: "TIMESTAMP", default: pgm.func("CURRENT_TIMESTAMP") },
  });
  pgm.addConstraint("folders", "unique_user_folder", {
    unique: ["user_id", "name"],
  });
};

exports.down = (pgm) => {
  pgm.dropTable("folders");
};
