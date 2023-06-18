// Select the database to use.
use('ReactBackendProject');

//Insert a few documents into the PortfolioData collection.
// db.getCollection('projects').insertMany(
//     [
//         {
          
//             image: 'https://cdn.dribbble.com/userupload/7900592/file/original-56c9a0d7f7f10803070c1ef0f8e5d61f.png?compress=1&resize=400x300&vertical=center',
//             title: 'The DEN',
//             github: 'https://github.com',
//             demo: 'https://dribbble.com/shots/21772419-The-Den',
//         },
//         {
       
//             image: 'https://cdn.dribbble.com/userupload/7900580/file/original-10955c304c6cd1f78cd7de30df5123d5.png?compress=1&resize=400x300&vertical=center',
//             title: 'Stare at your fears',
//             github: 'https://github.com',
//             demo: 'https://dribbble.com/shots/21772413-Stare-at-your-fear',
//         },
//         {
//             image: 'https://cdn.dribbble.com/userupload/7900573/file/original-dd7feddd3e3b06237a0ba5d1aa82a0a4.png?compress=1&resize=400x300&vertical=center',
//             title: 'Labrador',
//             github: 'https://github.com',
//             demo: 'https://dribbble.com/shots/21772410-Labrador',
//         },
//         {
        
//             image: 'https://cdn.dribbble.com/userupload/7900569/file/original-17230440ce4e36a3a66e479cfce8d66b.png?compress=1&resize=400x300&vertical=center',
//             title: 'Kittens',
//             github: 'https://github.com',
//             demo: 'https://dribbble.com/shots/21772408-Kittens',
//         },
//         {
     
//             image: 'https://cdn.dribbble.com/userupload/7900545/file/original-c057a7ceb04dd0a07a03534558708bfc.png?compress=1&resize=400x300&vertical=center',
//             title: 'Cheetah',
//             github: 'https://github.com',
//             demo: 'https://dribbble.com/shots/21772398-Cheetah',
//         },
//         {
       
//             image: 'https://cdn.dribbble.com/userupload/7900525/file/original-62218333edb8c182cbd176fc92daca8d.png?compress=1&resize=400x300&vertical=center',
//             title: 'Lambo',
//             github: 'https://github.com',
//             demo: 'https://dribbble.com/shots/21772391-Lambo',
//         }

//     ]
// );

// Insert a few documents into the PortfolioData collection.
db.getCollection('testimonials').insertMany(
 [
    {
        avatar: "https://cdn.dribbble.com/userupload/7901407/file/original-1cf3373c9baa3061ccadf7551f7d0ad5.png?compress=1&resize=1024x1079&vertical=center",
        name: "Duesenberry Ako",
        review:
          " I just wanted to take a moment to thank you for all of your help with my last sitetele. Your expertise and guidance were invaluable, and I couldn’t have done it without you. Thanks again for everything!” ."
      },
      {
        avatar: "https://cdn.dribbble.com/userupload/7901408/file/original-8461f67029944e10d3236b7da95635ef.png?compress=1&resize=1024x1412&vertical=center",
        name: "Epie Courage",
        review:
          "I am Epie courage an entrepreneur and I came into contact with Abangma Arrah a through other remarks from friends about his great skills i IT that web building graphic designs etc so I was in need of a web developer to build an e-commerce website which he delivered and even proposed an app for the site which is still to be published names Prime Bay I’ll say this guys is 5star rating he knows his stuff 👍"
      },
      {
        avatar: "https://cdn.dribbble.com/userupload/7901406/file/original-3f964a4eed26b51a301abf86869f3d38.png?compress=1&resize=1024x1365&vertical=center",
        name: "Djouse Loic",
        review:
          "Your willingness to share your knowledge and experience has helped me grow as a developer and has enabled me to deliver a better product to our client. I appreciate your professionalism, attention to detail, and ability to work collaboratively as a team. You truly are a fantastic web developer, and I feel fortunate to have had the opportunity to work with you.."
      },
      {
        avatar: "https://cdn.dribbble.com/userupload/7901480/file/original-bd6598c9db1dcea4591d97e9f14c4e59.png?compress=1&resize=1024x1365&vertical=center",
        name: "Scott",
        review:
          "  I just wanted to take a moment to express my sincere gratitude for everything you've done for me as my manager. Your hard work, dedication, and guidance have been invaluable to my success as an artist. Your tireless efforts behind the scenes have allowed me to focus on my craft and create the best possible music. I appreciate your professionalism, attention to detail, and ability to navigate the music industry with ease. Your support and encouragement have meant the world to me, and I feel incredibly fortunate to have you on my team. Thank you for everything you do, and I look forward to continuing our journey together. "
  
      },
      {
        avatar: "https://cdn.dribbble.com/userupload/7901405/file/original-3582555dbb1c1a142af6690017e1984a.png?compress=1&resize=1024x877&vertical=center",
        name: "Harry",
        review:
          "As a photographer & videographer, I have worked with many videographers in the past, but your work truly stands out. Your ability to seamlessly blend into the event and capture the important moments without being intrusive was remarkable. The final product was nothing short of spectacular. ."
  
      },
      {
        avatar: "https://cdn.dribbble.com/userupload/7901404/file/original-a27eac32767971ed3ab5ec173ec95a12.png?compress=1&resize=400x346",
        name: "Bryan",
        review:
          "I'm glad i was opportune to reach out and thank you for all the help and guidance you provided during our training sessions. Your expertise and motivation have been instrumental in helping me achieve my fitness goals. I appreciate your professionalism, attention to detail, and ability to tailor the workout sessions to my individual needs. You truly are a fantastic trainer, and I feel fortunate to have had the opportunity to work with you. Looking forward to continuing our sessions and achieving even greater results together. Thanks again!"
  
      },
    ]
);