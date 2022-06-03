import "reflect-metadata";

function validateReturnType(target: Object, propertyName: string) {
  const returnType = Reflect.getMetadata(
    "design:returntype",
    target,
    propertyName
  );
  console.log("returnType：", returnType);
}

export class ReflectReturnType {
  @validateReturnType
  returnSomething(value: string): string {
    return value;
  }
}
