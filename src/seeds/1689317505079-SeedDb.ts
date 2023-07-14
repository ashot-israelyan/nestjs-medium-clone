import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1689317505079 implements MigrationInterface {
  name = 'SeedDB1689317505079';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`,
    );

    // password is 123
    await queryRunner.query(
      `INSERT INTO users (username, email, password) VALUES ('foo', 'foo@gmail.com', '$2b$10$uQXcdGyUCbKpSb6wKZxDSur0EIRmKpX2wEuRAMatnwSrgcNYfmroa')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'First article description', 'First article body', 'coffee,dragons', 1), ('second-article', 'Second article', 'Second article description', 'Second article body', 'coffee,dragons', 1)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return Promise.resolve(null);
  }
}
