//Daily Code Challenge

// Simple, remove the spaces from the string, then return the resultant string.

// describe("Basic tests",() =>{
//     it("Fixed Tests", () => {
//       assert.strictEqual(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
//       assert.strictEqual(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
//       assert.strictEqual(noSpace('8aaaaa dddd r     '), '8aaaaaddddr'); 
//     });
//   });

function noSpace(string){
    let newString =[]
    let result;
    for (let i = 0; i < string.length; i++) {
    if (string[i]==' ') {
      continue
    }
      newString.push(string[i])
    } 
    return newString.join('');
    
    }
    