import { ReflectParamsType } from "./ReflectParamsType";
import { ReflectAttributeType } from "./ReflectAttributeType";
import { Logger } from "./Logger";
import { MetaData } from "./Metadata";
import { ReflectReturnType } from "./ReflectReturnType";
// print paramsTypes
// new ReflectParamsType().sayRepeat("test", 123);
// // print attributeTypes
// new ReflectAttributeType().logType;
// new ReflectReturnType().returnSomething("test");
// // decorate logger info
// const logger = new Logger();
// logger.add(1, 2);
// // class metadata
// const classMetadata = Reflect.getMetadata("classDecorator", MetaData);
// console.log(classMetadata);

function classDecorator(target: any) {
  target.prototype.decorator = "decorator";
  console.log("这里是类装饰器");
}

@classDecorator
class SomeClass {
  someMethod() {}
}

const classObj: any = new SomeClass();
// console.log(classObj.decorator)
