exports.up = (pgm) => {
  pgm.createTable("note_tags", {
    note_id: {
      type: "INTEGER",
      notNull: true,
      references: "notes(id)",
      onDelete: "CASCADE",
    },
    tag_id: {
      type: "INTEGER",
      notNull: true,
      references: "tags(id)",
      onDelete: "CASCADE",
    },
  });
  pgm.addConstraint("note_tags", "pk_note_tags", {
    primaryKey: ["note_id", "tag_id"],
  });
};

exports.down = (pgm) => {
  pgm.dropTable("note_tags");
};
