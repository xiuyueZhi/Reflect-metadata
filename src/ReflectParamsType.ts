import "reflect-metadata";

function validateFactory(
  target: object,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const paramTypes = Reflect.getMetadata(
    "design:paramtypes",
    target,
    propertyName
  );
  console.log("paramTypes:", paramTypes);
}

// function validateParamsType() {
//   return validateFactory;
// }

export class ReflectParamsType {
  @validateFactory
  sayRepeat(word: string, x: number) {
    return Array(x).fill(word).join("");
  }
}
