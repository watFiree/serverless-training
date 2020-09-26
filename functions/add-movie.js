const { query } = require("./util/hasura");

exports.handler = async (event) => {
  const { id, title, tagline, poster } = JSON.parse(event.body);

  const result = await query({
    query: `
      mutation ($id: String!, $poster: String!, $title: String!, $tagline: String!) {
        insert_movies_one(object: {id: $id, poster: $poster, tagline: $tagline, title: $title}) {
          id
          poster
          tagline
          title
        }
     }
  `,
    variables: { id, title, poster, tagline },
  });
};
