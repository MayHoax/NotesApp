exports.up = (pgm) => {
  pgm.createTable("tags", {
    id: { type: "SERIAL", primaryKey: true },
    name: { type: "VARCHAR(50)", unique: true, notNull: true },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("tags");
};
