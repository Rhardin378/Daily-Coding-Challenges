// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"




// p.r.e.p.

// parameter: takes in an url that is a STRING as a parameter
// returns: returns just the name of the domain 
// example: 

// // domainName("http://github.com/carbonfive/raygun") == "github" 
// // domainName("http://www.zombie-bites.com") == "zombie-bites"
// // domainName("https://www.cnet.com") == "cnet"

// pseudocode: we want to remove everything after the domain name .com/* and before the domain name 
//  remove the https:// by replacing the part of a string with ""


function domainName(url){
  return url.replace('https://','').replace('http://','').replace('www.','').split('.')[0]
  //replace the stuff upfront
}