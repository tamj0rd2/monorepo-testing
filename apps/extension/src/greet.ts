import { getPossibleGreetings } from "@ts-quickfixes/plugin"

export const getGreeting = (name: string) => {
  const greetings = getPossibleGreetings()
  const index = Math.random() * (greetings.length - 1) + 1;
  return `${greetings[index]} ${name}!`
}
