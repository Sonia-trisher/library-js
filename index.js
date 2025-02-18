const library =[
    {
        id:'245vgr',
        title:'to killbird',
        authour:'sonia',
        genre: 'classic',
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
        genre: 'classic',
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
        genre: 'classic',
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
        genre: 'classic',
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


function  addBook(book){
    const numberOfBookBefore = library.length;
    library.push(book);
    const numberOfBookAfter = library.length;
    return "Number of books added:"+ (numberOfBookAfter-numberOfBookBefore);

}  

function addManyBooks(books){
    // option1
    // library.concat(books);
    //option2
    // const manyBooks = [...library,...books];
    books.forEach(book=>{
        library.push(book);
    });
    
    return "Number of books add: " + books.length + 
           "\nTotal number of books: " + library.length;

}
const UpdateBook = () => {

}
const RemoveBook =() => {

}
const SearchBook = () => {

}
function DisplayBooks (){
    return library;
}
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
    authour:'dct.tit',
    genre: 'fantastic',
    available:true,
    borrowedId:'245vgr',
    dateBorrowed:'2023-09-01',
    dateReturned:'2023-09-15',
   createAt:'2023-09-01',
   upDatedAt:'2023-09-01',

}
// console.log(addBook(newBook));
// console.log(DisplayBooks().length);
const bulkBooks = [
    {
    id:'251vgr',
    title:'True love',
    authour:'stella',
    genre: 'thriller',
    borrowedId:'',
    dateBorrowed:'',
    dateReturned:'',
   createAt:'2023-15-01',
   upDatedAt:'2023-15-01',

    },
    {
    id:'252vgr',
    title:'mother',
    authour:'keza',
    genre: 'fantasy',
    borrowedId:'',
    dateBorrowed:'',
    dateReturned:'',
   createAt:'2023-15-01',
   upDatedAt:'2023-15-01',

    }
]
// console.log(addManyBooks(bulkBooks));
const upDate = {
    d:'200kkk',
    dateBorrowed:'2023-09-01',
}
updateBook(id,updates)






