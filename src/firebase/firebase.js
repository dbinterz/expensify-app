import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId:process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIEBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: "1:283341427583:web:4d5d421a5679c14a8e404a",
    measurementId: "G-Q73Q3GV3BJ"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default}; 

//child_removed
// database.ref('expenses').on('child_removed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot)=> {
//       const expenses = [];

//       snapshot.forEach((childSnapshot) =>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//       })
//       console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//       snapshot.forEach((childSnapshot) =>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//       })
//       console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Food',
//     note: 'Weekly shop',
//     amount: '123',
//     createdAt: 123456789
// });

// database.ref('notes/-MDkTX1fUC85LtyPqYLp')
//   .remove();

// database.ref('notes').push({
//     titile: 'course stuff',
//     body: 'dwuhwbla bla blaeiweun'
// })

// const firebaseNotes ={
//     notes: {
//         ifoejwhjhowefj: {
//             titile: 'First note',
//             body: 'This is my note'
//         },
//         wjekljew: {
//             titile: 'Second note',
//             body: 'This is my new note'
//         }
//     }
// }
 
// const notes = [{
//     id: '12',
//     titile: 'First note',
//     body: 'This is my note'
// },{
//     id: '13',
//     titile: 'Second note',
//     body: 'This is my new note'
// }]

// database.ref('notes').set(notes);

// database.ref('notes/12');

// console.log(database.ref('notes').toJSON());
// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// } );

// database.ref().update({
//     age: 39,
//     'job/title': 'Citi'
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('error with data fetching' , e);
// });

// setTimeout(() => {
//     database.ref('age').set(39);
// }, 3500);


// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(37);
// }, 10500);
// database.ref('location/city')
//     .once('value')
//     .then((snapshot)=>{
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e)=>{
//         console.log('error: ', e);
//     });

// database.ref().set({
//     name: 'Damien Bintley',
//     age: 39,
//     stressLevel: 5,
//     job: {
//         title:'Software Developer',
//         company: 'Citi'
//     },
//     location: {
//         city: 'Holywood',
//         county: 'Down',
//         country: 'NI'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) => {
//     console.log('This failed', e)
// });

// database.ref().update({
//     'job/company': 'Amazon',
//     'location/city': 'Belfast',
//     'location/county': 'Antrim',
//     stressLevel: 9
// });

// database.ref('isSingle').set(null);

// database.ref('isSingle')
//     .remove()
//     .then(()=>{
//         console.log('removed')
//     }).catch((e)=>{
//         console.log('error',e)
// });