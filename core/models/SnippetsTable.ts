import { Database as SqliteDatabase } from 'better-sqlite3';
import SqliteTable from '@justinearl/commons/lib/SqliteTable';
import TypeSerializer from '@justinearl/commons/lib/TypeSerializer';
import IDataSnippet from '@justinearl/hero-interfaces/IDataSnippet';

export default class SnippetsTable extends SqliteTable<IDataSnippet> {
  constructor(db: SqliteDatabase) {
    super(db, 'Snippets', [
      ['name', 'TEXT'],
      ['value', 'TEXT'],
      ['timestamp', 'DATETIME'],
      ['commandId', 'INTEGER'],
    ]);
  }

  public getByName(name: string): IDataSnippet[] {
    return this.db
      .prepare(`select * from ${this.tableName} where name=:name`)
      .all({ name })
      .map((x: IDataSnippet) => {
        return {
          ...x,
          value: TypeSerializer.parse(x.value),
        };
      });
  }

  public insert(
    name: string,
    value: any,
    timestamp: number,
    commandId: number,
  ): IDataSnippet {
    this.queuePendingInsert([
      name,
      TypeSerializer.stringify(value),
      timestamp,
      commandId,
    ]);
    return { name, value, timestamp, commandId };
  }
}
