exports.up = (pgm) => {
  pgm.createTable("users", {
    id: { type: "SERIAL", primaryKey: true },
    email: { type: "VARCHAR(255)", unique: true, notNull: true },
    password: { type: "VARCHAR(255)", notNull: true },
    username: { type: "VARCHAR(50)" },
    created_at: { type: "TIMESTAMP", default: pgm.func("CURRENT_TIMESTAMP") },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("users");
};
