export interface Item {
  id?: number;
  title: string;
  description: string;
  done: boolean;
  involvedPersons?: string[];
}
