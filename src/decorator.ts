// How to change the class by using the structure of inner class in the template factory.

function WithThis(template: string, hookId: string) {
  console.log("template factory");
  //"I am going to make a template factory"
  return function<T extends { new (..._: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    //originalConstructor = class "Exchange". It would be a simple understanding to identify this structure
    //But, in this case, I would make {new()} type. It means "generic T should become a form which is "{}" based on new operator"
    // this "new" thing would have any parameters("..._" :any[]), but I don't care whether there is parameter or not, but I guarantee that the new object mush have "name" property
    return class extends originalConstructor {
      //"I am making a new constructor structure with inheritance of old one"
      constructor(..._: any[]) {
        super(); // upser() needs because I demand inheritance of "originalConstructor" I would start the old one first

        //the codes below can be a contents of new constructor which replaces the old constructor with new one
        const hooked = document.getElementById(hookId);
        if (hooked) {
          hooked.innerHTML = template;
          hooked.querySelector("h1")!.textContent = this.name; // the reason how I can use this in here is that decorator can take the form of class inside the parameter of function. in this case, class "Exchange". So, it is like there is a "WithThis" decorator and two parameter "<h1>~~~" "app", and factory part act as rendering the structure of class. In this case's constructor. Therefore, "this" chould be a name of what I will make next.
        }
      }
    };
  };
}

@WithThis("<h1>put this thind in h1</h1>", "app")
class Exchange {
  name = "Anderson";

  constructor() {
    console.log("creating Exchange object");
  }
}

const test1 = new Exchange();
// the important thing is that I can make class Exchange and by using decorator I can decorate Exchange with "WithThis"
// Of course WithTihs's properties themselves work regardless of instantiation but the contents of constructor works only when I do instantiation.
