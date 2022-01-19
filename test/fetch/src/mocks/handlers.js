import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:3000/todo', (req, res, ctx) => {
    return res(
      ctx.json({
        todo : {
          task : 'Todo from Server',
        }
      })
    )
  }),
  rest.post('/login', (req, res, ctx) => {
    const { username } = JSON.parse(req.body);

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: username,
        lastName: 'Maverick',
      })
    )
  }),
  rest.get('https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json', async(req, res, ctx) => {
    return res(
      ctx.json({
        "data": {
          "people" :
          [
            {
              "name": "hong",
              "age": 135
            },
            {
              "name": "timmy",
              "age": 13
            },
            {
              "name": "cindy",
              "age": 15
            },
            {
              "name": "judy",
              "age": 25
            },
            {
              "name": "marry",
              "age": 64
            },
            {
              "name": "tommy",
              "age": 109
            }
          ]
        }
      })
    )
  })
]
