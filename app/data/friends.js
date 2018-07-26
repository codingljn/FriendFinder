// Initially we just set it equal to a set of "dummy" friends.
// But you could have it be an empty array as well.

var fakeFriends = [
    {
      name: "Jessica",
      photo: "https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      results: ["5", "3", "4", "5", "2", "5", "4", "4", "3" , "5"]
    },
    {
        name: "James",
        photo: "https://images.pexels.com/photos/462680/pexels-photo-462680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        results: ["1", "5", "2", "3", "4", "3", "5", "2", "1" , "1"]
      },
      {
        name: "Dr. Lecter",
        photo: "https://www.sickchirpse.com/wp-content/uploads/2017/08/Hannibal-Action-Figure.jpg",
        results: ["5", "5", "5", "5", "1", "1", "5", "5", "5" , "5"]
      },
      {
        name: "Patrice and Ethel",
        photo: "https://images.hellogiggles.com/uploads/2017/02/17033152/shining-twins.jpg",
        results: ["1", "1", "1", "1", "1", "1", "1", "1", "1" , "1"]
      }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = fakeFriends;