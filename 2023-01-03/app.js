
function past(h, m, s){
    return (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000)
    }

takes in 3 numbers as arguments 
returns milliseconds past midnight 
    assert.strictEqual(past(0,1,1),61000)
    assert.strictEqual(past(1,1,1),3661000)
    assert.strictEqual(past(0,0,0),0)



return (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000)


function past(h, m, s){
    return (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000)
    }