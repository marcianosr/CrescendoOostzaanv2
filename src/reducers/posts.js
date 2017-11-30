const initialState = [
	'No posts',
]

export const posts = (state = initialState, action) => {
	if (action.type === 'GET_POSTS') {
		return [
			{
				id: 1,
				title: 'Hunter X Hunter',
				excerpt: 'This anime series revolves around Gon and Killua going on an adventure looking for Gon his dad!',
				body: 'Hunter × Hunter is an anime television series that aired from 2011 to 2014 based on Yoshihiro Togashi\'s Hunter × Hunter manga. The story begins with a young boy named Gon Freecss, who one day discovers that the father who he thought was dead, is in fact alive and well.',
				date: '22 oktember 2200',

			}
		];
	}
	// console.log(action, 'action')
	// Setup actions to fetch/load posts.
	return state;
}
