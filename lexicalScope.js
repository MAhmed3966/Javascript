// //  Global scope
// //  it means it can be accesible everywhere in the file
// var name = "ahmed";

// // const main = () => {
// //     const nested = () => {
// //         const returnName = () => {
// //             return name
// //         }
// //         return returnName
// //     }
// //     return nested();
// // }

// // const getName = main()
// // console.log(getName())

// // async function ExportData() {}
// var count = 0;
// var data = [];
// const getText = async () => {
//   for (i = 0; i < 60; i++) {
//     setTimeout(() => {
//       for (j = 0; j < 10; j++) {
//         fetch(
//           "http://tuneclick.brightlineeating.com/aff_c?offer_id=13&aff_id=1&source=testoffer&aff_sub=testoffer"
//         )
//           .then(function (response) {
//             //   console.log(response.url); // Final URL after redirections
//             let params = new URL(response.url).searchParams;
//             let transaction_id = params.get("transaction_id");
//             console.log(transaction_id);
//             data.push({ transaction_id: transaction_id });
//             localStorage.setItem('transactionId',JSON.stringify(data));

//             return data;
//           })
//           .then((data) => {
//             console.log(data);
//             // const newSheet = data_to_append.Sheets["Sheet1"];
//             // const url = 'transactionids.xlsx';
//           });
//       }
//     }, 1000);

//   }

// }
// getText();

// // function getData() {
// //   return new Promise((resolve, reject) => {
// //      resolve(data);
// //   })
// // }

// // var Data = getData();
// // Data.then((data)=>{
// //   console.log("hello there")
// // })

// // const workbook = XLSX.readFile("transactionids.xlsx");
// // var request = new XMLHttpRequest();
// // // may be necessary to escape path string?
// // request.open("GET", "transactionids.xlsx");
// // console.log(request);

// // // C:\Javascript
// // filename = "transactionids.xlsx";

// // let params = new URL(response.url).searchParams;
// // let transaction_id = params.get("transaction_id");
// // filename = "transactionids.xlsx";

// 16/01/23

let a = 9;

function func1() {
  let a = 10;
  return func2();
   function func2() {
    let a = 11;
    return func3();
     function func3() {
      let a = 1;
      return func4();
       function func4() {
        return a;
      }
    }
  }
}

console.log(func1());
