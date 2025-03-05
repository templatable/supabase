import { supabase } from '.'

interface Query {
  [key: string]: string | number | boolean | null
}

interface Payload {
  [key: string]: string | number | boolean | null | object
}

class SupabaseHelper {
  /**
   * Retrieves data from a specified table based on the provided query.
   *
   * @param table - The name of the table to query.
   * @param query - An optional query object to filter the results.
   * @returns A promise that resolves to the retrieved data.
   * @throws Throws an error if the query fails.
   *
   * @example
   * const helper = new SupabaseHelper();
   * const data = await helper.getData('users', { age: 25 });
   * console.log(data);
   */
  async getData(table: string, query: Query = {}): Promise<any[]> {
    let queryBuilder = supabase.from(table).select('*')
    for (const [key, value] of Object.entries(query)) {
      queryBuilder = queryBuilder.eq(key, value)
    }
    const { data, error } = await queryBuilder
    if (error) {
      throw new Error(error.message)
    }
    return data
  }

  /**
   * Inserts data into a specified table.
   *
   * @param table - The name of the table to insert data into.
   * @param payload - The data to insert.
   * @returns A promise that resolves to the inserted data.
   * @throws Throws an error if the insertion fails.
   *
   * @example
   * const helper = new SupabaseHelper();
   * const data = await helper.insertData('users', { name: 'John Doe', age: 30 });
   * console.log(data);
   */
  async insertData(table: string, payload: Payload): Promise<any> {
    const { data, error } = await supabase.from(table).insert(payload)
    if (error) {
      throw new Error(error.message)
    }
    return data
  }

  /**
   * Updates data in a specified table based on the provided ID and query.
   *
   * @param table - The name of the table to update.
   * @param id - The ID of the record to update.
   * @param payload - The data to update.
   * @param query - An optional query object to filter the results.
   * @returns A promise that resolves to the updated data.
   * @throws Throws an error if the update fails.
   *
   * @example
   * const helper = new SupabaseHelper();
   * const data = await helper.updateData('users', '123', { age: 31 });
   * console.log(data);
   */
  async updateData(
    table: string,
    id: string,
    payload: Payload,
    query: Query = {},
  ): Promise<any> {
    let queryBuilder = supabase.from(table).update(payload).eq('id', id)
    for (const [key, value] of Object.entries(query)) {
      queryBuilder = queryBuilder.eq(key, value)
    }
    const { data, error } = await queryBuilder
    if (error) {
      throw new Error(error.message)
    }
    return data
  }

  /**
   * Deletes data from a specified table based on the provided ID and query.
   *
   * @param table - The name of the table to delete data from.
   * @param id - The ID of the record to delete.
   * @param query - An optional query object to filter the results.
   * @returns A promise that resolves to the deleted data.
   * @throws Throws an error if the deletion fails.
   *
   * @example
   * const helper = new SupabaseHelper();
   * const data = await helper.deleteData('users', '123');
   * console.log(data);
   */

  async deleteData(table: string, id: string, query: Query = {}): Promise<any> {
    let queryBuilder = supabase.from(table).delete().eq('id', id)
    for (const [key, value] of Object.entries(query)) {
      queryBuilder = queryBuilder.eq(key, value)
    }
    const { data, error } = await queryBuilder
    if (error) {
      throw new Error(error.message)
    }
    return data
  }
}

export default SupabaseHelper
