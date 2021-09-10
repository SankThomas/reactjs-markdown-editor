import { useState } from "react"
import { Remarkable } from "remarkable"

const md = new Remarkable()

export default function App() {
  const [text, setText] = useState("")

  return (
    <main className="px-5 py-10 text-gray-900 md:max-w-3xl md:mx-auto">
      <h1 className="font-bold text-center text-4xl xl:text-6xl mb-5">
        Markdown editor
      </h1>

      <article className="flex flex-col items-start justify-center rounded">
        <label htmlFor="markdown" className="mb-3">
          Type in something to see the magic
        </label>
        <textarea
          name="textarea"
          id="markdown"
          cols="30"
          rows="10"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full text-gray-900 tracking-wide p-5 rounded shadow"
          placeholder="Type in something"
        ></textarea>
      </article>

      <h3 className="mt-5 font-bold tracking-wide text-xl">Output</h3>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: md.render(text) }}
      ></div>

      <footer className="fixed bottom-5">
        <h3>Built in ReactJs using Remarkable</h3>
      </footer>
    </main>
  )
}
