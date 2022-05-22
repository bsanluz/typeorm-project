import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createMessage1653234210237 implements MigrationInterface {
    private messagesTable = new Table({
        name: 'messages',
        columns:[
            {
                name: 'id',
                type: 'integer',
                isGenerated: true,
                isPrimary: true,
                generationStrategy: 'increment'
                
            },
            {
                name: 'content',
                type: 'varchar',
                length: '255',
                isNullable: false

            },
            {
                name: 'user_id',
                type: 'integer',
                isNullable: false

            },            {
                name: 'created_at',
                type: 'timestamptz',
                isPrimary: false,
                isNullable: false,
                default: 'now()'
            },
            {
                name: 'updated_at',
                type: 'timestamptz',
                isPrimary: false,
                isNullable: false,
                default: 'now()'
            }
        ]
    })

    private foreignKey = new TableForeignKey({
        columnNames:['user_id'],
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
        referencedTableName: 'users'
    })

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.messagesTable)
        await queryRunner.createForeignKey('users',this.foreignKey)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.messagesTable)
    }

}
