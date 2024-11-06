import { data } from "./seeds";
import { List } from "./list.model";

export class ToDoData {
    getData(): List[] {
        let lists: List[] = [];

        for (let i = 0; i < data.length; i++) {
            lists[i] = new List(data[i].number, data[i].description, data[i].status)
        }

        return lists;
    }
}