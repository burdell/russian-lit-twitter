import { getRandomSentence } from './index'

async function main() {
  const sentence = await getRandomSentence()

  console.log('=== LENGTH ===', sentence.length)
  console.log(sentence || '=== NO SENTENCE GENERATED ===')
}

main()
