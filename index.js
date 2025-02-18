const library =[
    {
        id:'245vgr',
        title:'to killbird',
        authour:'sonia',
        genre: 'classsic',
        available:false,
        borrowedId:'245vgr',
        dateBorrowed:'2023-09-01',
        dateReturned:'2023-09-15',
       createAt:'2023-09-01',
       upDatedAt:'2023-09-01',
    },
    {
        id:'245vgr',
        title:'cl',
        authour:'dct.liliane',
        genre: 'classsic',
        available:true,
        borrowedId:'245vgr',
        dateBorrowed:'2023-09-01',
        dateReturned:'2023-09-15',
       createAt:'2023-09-01',
       upDatedAt:'2023-09-01',
    },
    {
        id:'245vgr',
        title:'1978',
        authour:'dj.eric',
        genre: 'classsic',
        available:false,
        borrowedId:'245vgr',
        dateBorrowed:'2023-09-01',
        dateReturned:'2023-09-15',
       createAt:'2023-09-01',
       upDatedAt:'2023-09-01',
    },
    {
        id:'245vgr',
        title:'mamamia',
        authour:'hardin',
        genre: 'classsic',
        available:false,
        borrowedId:'245vgr',
        dateBorrowed:'2023-09-01',
        dateReturned:'2023-09-15',
       createAt:'2023-09-01',
       upDatedAt:'2023-09-01',
    },
    {
        id:'245vgr',
        title:'my love',
        authour:'dj.sss',
        genre: 'classsic',
        available:true,
        borrowedId:'245vgr',
        dateBorrowed:'2023-09-01',
        dateReturned:'2023-09-15',
       createAt:'2023-09-01',
       upDatedAt:'2023-09-01',
    },
   
];
 
const Users =[ 
    {
        id:'200kkk',
        name:'tessa',
        email:'tessy@gmai.com',
        borrowedBooks:['245vgr']
    },
    
    {
        id:'201kkk',
        name:'sonia',
        email:'wamahorosonia1@gmai.com',
        borrowedBooks:[]
    },
    
    {
        id:'202kkk',
        name:'keza',
        email:'keza@gmai.com',
        borrowedBooks:[]
    },
    

];


function  addBooks(){

}  

function addManyBooks(){

}
const UpdateBook = () => {

}
const RemoveBook =() => {

}
const SearchBook = () => {

}
// function DisplayBooks (){
//     return library;
// }
 function DisplayAvailableBooks(available){
    var books = [];
    if(available){
       books = library.filter(book => book.available)
    }else{
        books = library.filter(book => !book.available)
    }
  return books;
    
}


   
// console.log(DisplayBooks())
// console.log(DisplayAvailableBooks(false))
console.log(DisplayAvailableBooks(true))
const newBook ={
    id:'250vgr',
    title:'The lord of the right',
    authour:'dct.liliane',
    genre: 'fantastic',
    available:true,
    borrowedId:'245vgr',
    dateBorrowed:'2023-09-01',
    dateReturned:'2023-09-15',
   createAt:'2023-09-01',
   upDatedAt:'2023-09-01',

}



