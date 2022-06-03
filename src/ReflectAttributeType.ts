import "reflect-metadata";

// function validateAttributeType(): PropertyDecorator {
//   return (target: Object, propertyKey: string | symbol): void => {
//     const type = Reflect.getMetadata("design:type", target, propertyKey);
//     console.log("type:", type.name);
//   };
// }

function validateAttributeType(target: Object, propertyKey: string): void {
  const type = Reflect.getMetadata("design:type", target, propertyKey);
  console.log("type:", type.name);
}

export class ReflectAttributeType {
  @validateAttributeType
  public logType!: string;
}
