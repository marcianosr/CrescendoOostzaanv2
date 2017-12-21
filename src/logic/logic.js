import { createLogic, createLogicMiddleware } from 'redux-logic';
import { successPosts, errorPosts } from '../actions/posts';

export const fetchPostsLogic = createLogic({
  type: 'FETCH_POSTS',
  cancelType: 'ERROR_POSTS',

  process({ getState, action}, dispatch, done) {

    let postsFetched = true;

    const posts = new Promise((resolve, reject) => {
      setTimeout(() => {

        postsFetched ?
          resolve('Succes! Save posts to state!') :
          reject('Aww, fail!');
      }, 2000);
    })

    posts.then((success) => {
      let posts = [
        {
          id: 1,
          title: 'Hunter Exam arc',
          excerpt: 'This anime series revolves around Gon and Killua going on an adventure looking for Gon his dad!',
          body: 'The journey begins with Gon taking a series of bizarre tests to become a Hunter, which includes navigating a deadly jungle, hunting other applicants, killing a wild boar, an extraordinarily long underground marathon, and making sushi. During the Hunter Exam, Gon meets and befriends three of the applicants, Kurapika, Killua, and Leorio. The series\' first antagonist is also introduced as one of the applicants. Hisoka is a complex villain who uses playing cards as weapons and views Gon as an "unripe fruit" that he will take great pleasure in killing once he\'s grown up enough to present a challenge. Before the end of the Hunter Exam, Killua faces his brother, Illumi, who makes him come home before he can even finish the Exam.',
          date: '22 oktember 2200',
        },
        {
          id: 2,
          title: 'Yorknew City arc',
          excerpt: 'Thrilling arc with the Phantom Troupe!',
          body: 'The four main characters reunite for the world\'s largest auction in a sprawling metropolis named Yorknew City. Gon, Killua, and Leorio try different methods to make enough money to buy Greed Island, a Joystation Console video game which could help Gon find his father. Meanwhile, Kurapika works as a bodyguard for Neon Nostrade. Neon is a flesh collector and daughter to the head of a Mafia family, in order for him to get closer to his clan\'s Scarlet eyes which are set to to be auctioned in the same city. The Phantom Troupe, a group of thieves, who had slaughtered Kurapika\'s clan, are also gathering at Yorknew City.',
          date: '22 oktember 2200',
        }
      ]

      dispatch(successPosts(posts))

    }).catch((error) => {
      console.log(error);
      dispatch(errorPosts(error));
    }).then(() => {
       done();
    })

  }
})

createLogicMiddleware([
  fetchPostsLogic,
]);

const middlewares = [
  fetchPostsLogic
]

export default middlewares;
