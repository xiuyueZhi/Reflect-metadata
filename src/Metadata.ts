import "reflect-metadata";

@Reflect.metadata("classDecorator", "value")
export class MetaData {
  sayRepeat(word: string, x: number) {
    return Array(x).fill(word).join("");
  }
}
