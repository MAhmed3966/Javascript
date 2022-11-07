//  Global scope
//  it means it can be accesible everywhere in the file
var name = "ahmed";

// const main = () => {
//     const nested = () => {
//         const returnName = () => {
//             return name
//         }
//         return returnName
//     }
//     return nested();
// }

// const getName = main()
// console.log(getName())

async function getText() {
  fetch(
    "http://tuneclick.brightlineeating.com/aff_c?offer_id=13&aff_id=1&source=testoffer&aff_sub=testoffer"
  ).then(function (response) {
    console.log(response.url); // Final URL after redirections
    let params = new URL(response.url).searchParams;
    let transaction_id = params.get("transaction_id");
    console.log(transaction_id);
  });
}

getText();
