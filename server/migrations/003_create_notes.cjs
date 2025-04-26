exports.up = (pgm) => {
  pgm.createTable("notes", {
    id: { type: "SERIAL", primaryKey: true },
    user_id: {
      type: "INTEGER",
      notNull: true,
      references: "users(id)",
      onDelete: "CASCADE",
    },
    folder_id: {
      type: "INTEGER",
      references: "folders(id)",
      onDelete: "SET NULL",
    },
    title: { type: "VARCHAR(255)", notNull: true },
    description: { type: "TEXT" },
    color: { type: "VARCHAR(20)", default: "white" },
    is_archived: { type: "BOOLEAN", default: false },
    created_at: { type: "TIMESTAMP", default: pgm.func("CURRENT_TIMESTAMP") },
    updated_at: { type: "TIMESTAMP", default: pgm.func("CURRENT_TIMESTAMP") },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("notes");
};
