// domain/.netlify/functions/hello

const ıtems = [
  { id: 1, name: 'ısa' },
  { id: 2, name: 'furkan' },
]

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(ıtems),
  }
}
