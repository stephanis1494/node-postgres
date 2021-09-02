const getAllScores = async (request, response) => {
    response.status(200).json(scores)
}

const updateScore = async (request, response) => {
    const { user, score, rank, date } = request.body
    scores[rank] = { user, score, rank, date}
    response.status(200).json('success')
}

const scores = [
    {
        user: 'Juan',
        score: '1000',
        rank: 0,
        date: 1630540848561
    },
    {
        user: 'Stephen',
        score: '500',
        rank: 1,
        date: 1630540867317
    },
    {
        user: 'Moe',
        score: '10',
        rank: 2,
        date: 1630540874232
    },
    {
        user: 'Alice',
        score: '5',
        rank: 3,
        date: 1630540874444
    },
    {
        user: 'Maria',
        score: '1',
        rank: 4,
        date: 1630540871029
    }
]

module.exports = {
    getAllScores,
    updateScore
};
