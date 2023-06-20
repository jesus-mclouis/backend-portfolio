// Select the database to use.
use('ReactBackendProject');

//Insert a few documents into the PortfolioData collection.
/*db.getCollection('projects').insertMany(
    [
        {
          
            image: 'https://cdn.dribbble.com/userupload/7900592/file/original-56c9a0d7f7f10803070c1ef0f8e5d61f.png?compress=1&resize=400x300&vertical=center',
            title: 'The DEN',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21772419-The-Den',
        },
        {
       
            image: 'https://cdn.dribbble.com/userupload/7900580/file/original-10955c304c6cd1f78cd7de30df5123d5.png?compress=1&resize=400x300&vertical=center',
            title: 'Stare at your fears',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21772413-Stare-at-your-fear',
        },
        {
            image: 'https://cdn.dribbble.com/userupload/7900573/file/original-dd7feddd3e3b06237a0ba5d1aa82a0a4.png?compress=1&resize=400x300&vertical=center',
            title: 'Labrador',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21772410-Labrador',
        },
        {
        
            image: 'https://cdn.dribbble.com/userupload/7900569/file/original-17230440ce4e36a3a66e479cfce8d66b.png?compress=1&resize=400x300&vertical=center',
            title: 'Kittens',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21772408-Kittens',
        },
        {
     
            image: 'https://cdn.dribbble.com/userupload/7900545/file/original-c057a7ceb04dd0a07a03534558708bfc.png?compress=1&resize=400x300&vertical=center',
            title: 'Cheetah',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21772398-Cheetah',
        },
        {
       
            image: 'https://cdn.dribbble.com/userupload/7900525/file/original-62218333edb8c182cbd176fc92daca8d.png?compress=1&resize=400x300&vertical=center',
            title: 'Lambo',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21772391-Lambo',
        }

    ]
);*/

 //Insert a few documents into the PortfolioData collection.
db.getCollection('testimonials').insertMany(
 [
        {
          avatar: 'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/tips-for-professional-portraits.jpg',
          name: 'James Brown',
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
        },
        
        {
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rvvFzP2v-40awpf_uw6dq1UVh8R3jkGM2rrrqIbd6Ih3_d_fCEW8Fn0sl5OsJ1qaLuo&usqp=CAU',
          name: 'Tina Snow ',
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
        },
        {
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJpfFkpLYgdR4R0-ZomZ0ixnZVgLQUOnZnWQ&usqp=CAU',
          name: 'Kevin Roussel',
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
        },
        {
          avatar: 'https://images.squarespace-cdn.com/content/v1/530ce8d1e4b067ea68a9f821/1612484390216-5NVBC0NJJTFP1OPNRU6F/corporate%2Bbusiness%2Bheadshots%2Blos%2Bangeles_Danielle%2BSpires.jpg',
          name: 'Louisa McBrown',
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
        },
      
      
      ]
);
