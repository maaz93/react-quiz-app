// Not the ideal way to keep state. But this works.

const appState = {
    'questions': [
        {
            'id': 1,
            'text': 'What is the province that starts with the letter O?',
            'choices': [
                {
                    'id': 'a',
                    'text': 'Ontario'
                },
                {
                    'id': 'b',
                    'text': 'New Brunswick'
                },
                {
                    'id': 'c',
                    'text': 'Manitoba'
                },
                {
                    'id': 'd',
                    'text': 'Quebec'
                }
            ],
            'correct': 'a'
        },
        {
            'id': 2,
            'text': 'What province begins with the letter Q?',
            'choices': [
                {
                    'id': 'a',
                    'text': 'Ontario'
                },
                {
                    'id': 'b',
                    'text': 'New Brunswick'
                },
                {
                    'id': 'c',
                    'text': 'Nova Scotia'
                },
                {
                    'id': 'd',
                    'text': 'Quebec'
                }
            ],
            'correct': 'd'
        },
        {
            'id': 3,
            'text': 'Which of these provinces start with New?',
            'choices': [
                {
                    'id': 'a',
                    'text': 'Ontario'
                },
                {
                    'id': 'b',
                    'text': 'New Brunswick'
                },
                {
                    'id': 'c',
                    'text': 'Quebec'
                },
                {
                    'id': 'd',
                    'text': 'Manitoba'
                }
            ],
            'correct': 'b'
        },
        {
            'id': 4,
            'text': 'Which of these begin with the word Man?',
            'choices': [
                {
                    'id': 'a',
                    'text': 'Ontario'
                },
                {
                    'id': 'b',
                    'text': 'New Brunswick'
                },
                {
                    'id': 'c',
                    'text': 'Quebec'
                },
                {
                    'id': 'd',
                    'text': 'Manitoba'
                }
            ],
            'correct': 'd'
        },
        {
            'id': 5,
            'text': 'Which of these begin with the word Nova?',
            'choices': [
                {
                    'id': 'a',
                    'text': 'Ontario'
                },
                {
                    'id': 'b',
                    'text': 'Nova Scotia'
                },
                {
                    'id': 'c',
                    'text': 'British Columbia'
                },
                {
                    'id': 'd',
                    'text': 'New Brunswick'
                }
            ],
            'correct': 'b'
        }
    ],
    'score': 0,
    'current': 1
};

export default appState;
