import { hyphenate } from 'hyphen/ru'

export default async function(text) {
  const res = await hyphenate(text)
    .then(result => result)

  return res;
}
