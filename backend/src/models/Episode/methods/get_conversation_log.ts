import { EpisodeDoc } from "../Episode.js";




export default async function (this: EpisodeDoc): Promise<string[]> {
  const story = this.story
  console.log("I am here")
  // each story contains a text and an image caption convert it to a list of strings where each string contains speaker and message
  const story_log = story.map((story) => {
    console.log(story)
    const userMessage = `text : ${story.text}`
    const botMessage = `image caption : ${story.imageCaption}`
    return [userMessage, botMessage]
  })

  console.log("story log", story_log)
  const turns = this.turns
  // each turn contains a prompt i.e. the users message, and a response i.e. the bot's response convert it to a list of strings where each string contains speaker and message
  const conversation_log = turns.map((turn) => {
    console.log(turn)
    const userMessage = `user : ${turn.prompt}`
    const botMessage = `bot : ${turn.response}`
    return [userMessage, botMessage]
  })

  console.log("conversation log", conversation_log)

  // combine the story and conversation logs
  const conversationLog = [...story_log, ...conversation_log]
  return conversationLog.flat()
}
