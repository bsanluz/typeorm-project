import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1653233962185 implements MigrationInterface {

    private usersTable = new Table({
        name: 'users',
        columns:[
            {
                name: 'id',
                type: 'integer',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'
            },
            {
                name: 'email',
                type: 'varchar',
                length: '255',
                isUnique: true,
                isNullable: false

            },
            {
                name: 'created_at',
                type: 'timestamptz',
                isNullable: false,
                default: 'now()',
            },
            {
                name: 'updated_at',
                type: 'timestamptz',
                isNullable: false,
                default: 'now()',
            }

        ]
    })

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.usersTable)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.usersTable)
    }

}
